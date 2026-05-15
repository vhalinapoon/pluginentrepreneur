"""
Convert a flat white-background cutout (e.g. exported from Canva) into a
transparent PNG, while preserving the white halo around the subject.

Strategy: flood-fill from the four corners. White (255,255,255) pixels
connected to the corners become transparent. The halo (white) is enclosed
by the dark sticker edge so the flood stops at the boundary and the halo
stays opaque.
"""

from __future__ import annotations

import sys
from collections import deque
from pathlib import Path

import numpy as np
from PIL import Image

ROOT = Path(__file__).resolve().parents[1]
SRC = ROOT / "assets" / "victoria_headshot.png"
OUT = ROOT / "pluginentrepreneur-app" / "public" / "portrait.png"

# Threshold for the background pixels we want to erase.
# - WHITE: pixels with all channels >= threshold (used for white backgrounds)
# - BLACK: pixels with all channels <= threshold (used for black/JPEG backgrounds)
BG_MODE = "black"  # "white" or "black"
WHITE_MIN = 248
BLACK_MAX = 12
PAD = 20  # transparent margin around the trimmed result


def flood_fill_outside(rgb: np.ndarray) -> np.ndarray:
    """Return a boolean mask where True = pixel is outside-connected background."""
    h, w, _ = rgb.shape
    if BG_MODE == "white":
        bg = np.all(rgb >= WHITE_MIN, axis=2)
    else:
        bg = np.all(rgb <= BLACK_MAX, axis=2)
    visited = np.zeros((h, w), dtype=bool)

    q: deque[tuple[int, int]] = deque()
    for x in range(w):
        for y in (0, h - 1):
            if bg[y, x] and not visited[y, x]:
                visited[y, x] = True
                q.append((y, x))
    for y in range(h):
        for x in (0, w - 1):
            if bg[y, x] and not visited[y, x]:
                visited[y, x] = True
                q.append((y, x))

    while q:
        y, x = q.popleft()
        for dy, dx in ((-1, 0), (1, 0), (0, -1), (0, 1)):
            ny, nx = y + dy, x + dx
            if 0 <= ny < h and 0 <= nx < w and not visited[ny, nx] and bg[ny, nx]:
                visited[ny, nx] = True
                q.append((ny, nx))
    return visited


def trim(rgba: Image.Image, pad: int) -> Image.Image:
    alpha = rgba.split()[-1]
    bbox = alpha.getbbox()
    if not bbox:
        return rgba
    cropped = rgba.crop(bbox)
    if pad <= 0:
        return cropped
    canvas = Image.new(
        "RGBA",
        (cropped.width + 2 * pad, cropped.height + 2 * pad),
        (0, 0, 0, 0),
    )
    canvas.paste(cropped, (pad, pad), cropped)
    return canvas


def main() -> int:
    if not SRC.exists():
        print(f"Source not found: {SRC}", file=sys.stderr)
        return 1

    print(f"Loading {SRC}")
    img = Image.open(SRC).convert("RGB")
    print(f"Source size: {img.size}")

    rgb = np.array(img)
    outside_mask = flood_fill_outside(rgb)
    print(f"Outside background pixels: {int(outside_mask.sum())} / {outside_mask.size}")

    rgba = np.dstack([rgb, np.full(rgb.shape[:2], 255, dtype=np.uint8)])
    rgba[outside_mask, 3] = 0

    out_img = Image.fromarray(rgba, mode="RGBA")
    out_img = trim(out_img, PAD)
    print(f"Trimmed size: {out_img.size}")

    OUT.parent.mkdir(parents=True, exist_ok=True)
    out_img.save(OUT, format="PNG", optimize=True)
    size_kb = OUT.stat().st_size // 1024
    print(f"Wrote {OUT} ({size_kb} KB)")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
