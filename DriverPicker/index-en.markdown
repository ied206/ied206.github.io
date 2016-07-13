---
layout: project
projname: DriverPicker
title: <i class="fa fa-fw fa-search"></i>DriverPicker
tagline: Pickes up drivers for specific Windows from DriverPacks.
github: https://github.com/ied206/DriverPicker
zipball: https://github.com/ied206/DriverPicker/zipball/master
tarball: https://github.com/ied206/DriverPicker/tarball/master
ref: driverpicker-index
lang: en
---

# <i class="fa fa-fw fa-comment"></i> About
DriverPicker pick up only drivers you need from [DriverPacks Solution](https://drp.su).  
For example, picking up 'Windows 10 x64' drivers from 7, 8, 10, x86, x64 drivers.  
DriverPicker can also be used with other driver collections.

### <i class="fa fa-fw fa-question-circle"></i> Why did I write DriverPicker?
I wrote DriverPicker to use with [theoven.org's WinPESE](http://theoven.org/index.php?topic=1336.0), which needs drivers to work properly.  
When buling Windows PE with WinPESE, it only needs drivers which support one Windows version, but driver collections are commonly unsorted.  
DriverPicker automatically truncates unneeded drivers, which helps to save disk space and WinPESE build time.

# <i class="fa fa-fw fa-check"></i> System Requirement
- [Python 3](https://www.python.org/downloads/)
- [treelib](http://xiaming.me/treelib/) library
- Collection of Windows drivers, usually [DriverPacks Solution Full](http://download.drp.su/DriverPack-Offline.torrent).
You can find install and usage manual in GitHub.  


# <i class="fa fa-fw fa-cloud"></i> Download
Latest version is **v1.0 (20160619)**.  
You can get old versoin in [here]({{ site.baseurl }}/{{ page.projname }}/release/index-en.html).

<a href="{{ site.baseurl }}/{{ page.projname }}/release/v1.0/DriverPicker-v1.0-dist.zip" class="btn-dark"><i class="fa fa-fw fa-archive"></i>&nbsp;&nbsp;Download</a>

# <i class="fa fa-fw fa-book"></i> Open Source License
Source code available in GitHub, licensed under MIT License.  

<a href="https://github.com/ied206/DriverPicker/blob/master/LICENSE" class="btn-dark"><i class="fa fa-fw fa-book"></i>&nbsp;&nbsp;License</a>

# <i class="fa fa-fw fa-file-text"></i> ChangeLog

## v1.0 <small>(Build 20160712)</small>
Initial release

- [ADD] inf file's target Windows version recognition
- [ADD] `DriverPacks Solution` specific version recognition
- [ADD] Truncate drivers which does not support target Windows version.
