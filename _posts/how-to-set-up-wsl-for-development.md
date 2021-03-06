---
title: How to Set Up WSL for Development
date: '2021-02-23T23:13:25.100Z'
---

WSL (Windows Subsystem for Linux) is a great way to gain access to a Linux OS through a command line interface. Being restricted to the CLI, WSL does require us to use Windows GUI programs. This, along with WSL being a subsystem that depends on Windows, does result in certain quirks that need to be worked around in order to utilize WSL to the fullest.

Some of these quirks to resolve include:
* Synchronizing clipboards between WSL & Windows
* Accessing files from both Windows and WSL
* Choosing the right terminal to access WSL through

Due to the differences between WSL 1 & 2, the solutions to some of these issues differ depending on the version in use. I'll be focusing mainly on WSL 2 in this post, though I will cover some of the differences between WSL 1 & 2.

## Installation
If you haven't already, follow the [installation guide from Microsoft](https://docs.microsoft.com/en-us/windows/wsl/install-win10) to get WSL installed, preferably WSL 2. One possible reason you would need to settle for WSL 1, is if your version of Windows is not new enough, as covered in the guide. Another problem which I once ran into when installing WSL 2, is virtualization not being enabled in my PC's BIOS. I was halted with the error:
> "Please enable the Virtual Machine Platform Windows feature and ensure virtualization is enabled in the BIOS."

The setting you need to enable in your BIOS may be called "Intel Virtualization Technology" or similar depending on your CPU and motherboard.

## Synchronizing Clipboards
While you may be able to copy text from your WSL terminal to your Windows clipboard by highlighting it with the mouse, programs in WSL such as Tmux or Vim copy text to the Linux clipboard, rather than to the Windows clipboard. In order to synchronize the two, the solution I've used is an X server, VcXsrv. To set this up you can follow these [instructions from a GitHub comment](https://github.com/Microsoft/WSL/issues/892#issuecomment-275873108), with one exception if you're on WSL 2. Due to the way networking was changed between WSL 1 & 2, instead of adding `export DISPLAY=localhost:0.0` to your `.bashrc` / `.zshrc` in step 5, add these two lines:
```bash
export DISPLAY=$(awk '/nameserver / {print $2; exit}' /etc/resolv.conf 2>/dev/null):0
export LIBGL_ALWAYS_INDIRECT=1
```
Also, those instructions don't mention how to have VcXsrv start up automatically. For that, you'll want to move the `config.xlaunch` file it creates to the Windows startup directory: `C:\Users\<YOUR-USER>\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup\`

## Accessing Files from Both Windows and WSL
This is something that has changed a lot between WSL 1 & 2. In WSL 1, opening files from the Linux filesystem with a Windows program [was a no go](https://devblogs.microsoft.com/commandline/do-not-change-linux-files-using-windows-apps-and-tools), and it was instead recommended to keep those shared files in the Windows filesystem, that both Windows and Linux could access. When I was using WSL 1, I would keep all my git repos in a Windows directory, and symlink it for quick access to my Ubuntu home directory, at `~/_`. I used this underscore directory as a sort of "shared home directory" for Windows & Linux.

However in WSL 2, it is now recommended to keep those files in the Linux filesystem, for performance reasons. Now Windows is able to access the Linux filesystem as a network drive. You can view your Linux filesystem from the Windows File Explorer, by typing `\\wsl$` into its address bar. There's only one limitation I'm aware of with this network drive approach: symlinks.

Taking my use case as an example, I keep my configuration files in a "dotfiles" git repo. When developing on WSL and using VSCode on Windows, I would need to keep my dotfiles repo in the Windows filesystem in order to create a Windows symlink (`mklink /D "<target-dir>" "<source-dir>"` in `cmd.exe`) that links those config files to the directory that VSCode looks for them. That's one case to consider before you put everything in the Linux filesystem.

## Choosing a Terminal for WSL
The default terminal you get upon opening the Ubuntu Windows app (or other distro) is okay, but may be lacking some features or config options you've come to expect. Unless you're using Tmux, you're probably missing multiple terminal tabs. You can get this feature from the [Windows Terminal](https://www.microsoft.com/en-us/p/windows-terminal/9n0dx20hk701), from the Microsoft Store. My personal choice is [wsl-terminal](https://github.com/mskyaxl/wsl-terminal).
