#!/usr/bin/env python3
"""Serve the course repository locally for the static web UI."""

from __future__ import annotations

import argparse
import http.server
import os
import socketserver
import webbrowser
from pathlib import Path


class ReusableTCPServer(socketserver.TCPServer):
    allow_reuse_address = True


def main() -> int:
    parser = argparse.ArgumentParser(description="Serve the course locally.")
    parser.add_argument("--port", type=int, default=8000, help="Port to bind. Defaults to 8000.")
    parser.add_argument(
        "--open",
        action="store_true",
        help="Open the browser automatically after the server starts.",
    )
    args = parser.parse_args()

    repo_root = Path(__file__).resolve().parent.parent
    os.chdir(repo_root)

    handler = http.server.SimpleHTTPRequestHandler
    try:
        with ReusableTCPServer(("127.0.0.1", args.port), handler) as httpd:
            url = f"http://127.0.0.1:{args.port}/web/"
            print(f"Serving course at {url}")
            print("Press Ctrl+C to stop.")
            if args.open:
                webbrowser.open(url)
            try:
                httpd.serve_forever()
            except KeyboardInterrupt:
                print("\nServer stopped.")
    except OSError as exc:
        print(f"Unable to start server on port {args.port}: {exc}")
        print("Try another port, for example: python3 scripts/serve_course.py --port 8765")
        return 1
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
