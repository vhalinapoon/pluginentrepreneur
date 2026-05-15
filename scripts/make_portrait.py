"""
Process Victoria's portrait into a sticker-style cutout:
1. Remove background using rembg (AI segmentation).
2. Add a thick white halo stroke around the subject.
3. Trim transparent margins.
4. Save as PNG to public/portrait.png.
"""

from __future__ import annotations

import os
import sys
from pathlib import Path

import numpy as np
from PIL import Image, ImageFilter
from rembg import new_session, remove

ROOT = Path(__file__).resolve().parents[1]
SRC = ROOT / "assets" / "victoria.png"
OUT_DIR = ROOT / "pluginentrepreneur-app" / "public"
OUT_DIR.mkdir(parents=True, exist_ok=True)
OUT = OUT_DIR / "portrait.png"

HALO_PX = 22          # halo thickness in source-pixel space
HALO_COLOR = (255, 255, 255, 255)  # white halo
PAD = 30              # transparent padding around the subject after trim


def cutout(img: Image.Image) -> Image.Image:
    session = new_session("u2net")
    return remove(
        img,
        session=session,
        alpha_matting=True,
        alpha_matting_foreground_threshold=240,
        alpha_matting_background_threshold=20,
        alpha_matting_erode_size=8,
    )


def add_halo(rgba: Image.Image, thickness: int, color: tuple[int, int, int, int]) -> Image.Image:
    """Add a uniform halo stroke by dilating the alpha channel."""
    alpha = rgba.split()[-1]

    arr = np.array(alpha, dtype=np.uint8)
    arr = (arr > 128).astype(np.uint8) * 255
    binary = Image.fromarray(arr, mode="L")

    dilated = binary.filter(ImageFilter.MaxFilter(size=thickness * 2 + 1))
    dilated = dilated.filter(ImageFilter.GaussianBlur(radius=1.2))

    halo_layer = Image.new("RGBA", rgba.size, (0, 0, 0, 0))
    solid = Image.new("RGBA", rgba.size, color)
    halo_layer.paste(solid, (0, 0), dilated)

    out = Image.alpha_composite(halo_layer, rgba)
    return out


def trim(rgba: Image.Image, pad: int = 0) -> Image.Image:
    alpha = rgba.split()[-1]
    bbox = alpha.getbbox()
    if not bbox:
        return rgba
    cropped = rgba.crop(bbox)
    if pad > 0:
        new_size = (cropped.width + 2 * pad, cropped.height + 2 * pad)
        canvas = Image.new("RGBA", new_size, (0, 0, 0, 0))
        canvas.paste(cropped, (pad, pad), cropped)
        return canvas
    return cropped


def main() -> int:
    if not SRC.exists():
        print(f"Source not found: {SRC}", file=sys.stderr)
        return 1

    print(f"Loading {SRC}")
    img = Image.open(SRC).convert("RGBA")
    print(f"Source size: {img.size}")

    print("Removing background...")
    cut = cutout(img)
    print("Adding halo...")
    haloed = add_halo(cut, HALO_PX, HALO_COLOR)
    print("Trimming...")
    final = trim(haloed, PAD)
    print(f"Final size: {final.size}")

    max_w = 1600
    if final.width > max_w:
        ratio = max_w / final.width
        final = final.resize(
            (max_w, int(final.height * ratio)),
            Image.LANCZOS,
        )
        print(f"Resized to: {final.size}")

    final.save(OUT, format="PNG", optimize=True)
    print(f"Wrote {OUT} ({os.path.getsize(OUT) // 1024} KB)")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
