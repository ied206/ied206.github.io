---
layout: project
title: <i class="fa fa-battery-3"></i> BatteryLine
tagline: Show battery status always at screen.
github: https://github.com/ied206/BatteryLine
# zipball: https://github.com/ied206/BatteryLine/zipball/master
#tarball: https://github.com/ied206/BatteryLine/tarball/master
ref: batteryline-index
lang: en
---

# <i class="fa fa-fw fa-commenting"></i> About
This program indicate your Windows laptop/tablet's battery into line, drawing in the edge of your screen.  
It is especially useful in fullscreen, playing games or watching videos.   

# <i class="fa fa-fw fa-check"></i> System Requirement
Supports Windows Vista or later.

# <i class="fa fa-fw fa-cloud"></i> Download
Latest version is **v1.1 <small>(Build 20160712)</small>**.  
You can get old versoin in [here]({{ site.baseurl }}/BatteryLine/download/index-en.html).

<a href="{{ site.baseurl }}/BatteryLine/release/v1.1/BatteryLine-v1.1-Installer.exe" class="btn-dark"><i class="fa fa-fw fa-archive"></i>&nbsp;&nbsp;Installer</a>
<a href="{{ site.baseurl }}/BatteryLine/release/v1.1/BatteryLine-v1.1-x86.zip" class="btn-dark"><i class="fa fa-fw fa-tasks"></i>&nbsp;&nbsp;32bit Binary</a>
<a href="{{ site.baseurl }}/BatteryLine/release/v1.1/BatteryLine-v1.1-x64.zip" class="btn-dark"><i class="fa fa-fw fa-tasks"></i>&nbsp;&nbsp;64bit Binary</a>
<a href="{{ site.baseurl }}/BatteryLine/release/v1.1/BatteryLine-v1.1-src.zip" class="btn-dark"><i class="fa fa-fw fa-gears"></i>&nbsp;&nbsp;Source</a>

# <i class="fa fa-fw fa-book"></i> Open Source License
Source code available in GitHub, licensed under MIT License.  
Binary distribution of this project is compiled with TDM-GCC-64, which links MinGW-w64's winpthreads statically.

<a href="https://github.com/ied206/BatteryLine/blob/master/LICENSE" class="btn-dark"><i class="fa fa-book"></i>&nbsp;&nbsp;License</a>

# <i class="fa fa-fw fa-file-text"></i> ChangeLog

## v1.1
- [ADD] Support HiDPI (System Aware)
- [CHANGE] Search algorithm of ini file is improved
- [ADD] Support 'quiet' argument (-q)
- [ADD] Support 'help' argument (-h)

## v1.0
Initial release

- [ADD] Show or hide batteryline when charging
- [ADD] Select position of batteryline in top/bottom/left/right
- [ADD] Batteryline evade taskbar when conflict with taskbar
- [ADD] Set transparency of batteryline
- [ADD] Set height of batteryline
- [ADD] Draw batteryline to favorite monitor in multimonitor envrionment (Experimental)
- [ADD] Change color of batteryline when charging
- [ADD] Change color of batteryline based on remaining battery
