---
layout: project
projname: Notepad-UTF8
title: <i class="fa fa-fw fa-edit"></i> Notepad-UTF8
tagline: Set Notepad's default encoding to UTF-8.
github: https://github.com/ied206/Notepad-UTF8
ref: notepad-utf8-index
lang: en
---

# <i class="fa fa-fw fa-commenting"></i> About
Change Notepad's default encoding to UTF-8 from ANSI.   
No more distress from multibyte encoding!  

# <i class="fa fa-fw fa-check"></i> System Requirement
Support Windows XP to 10.  
You can find detail in GitHub.

# <i class="fa fa-fw fa-cloud"></i> Download
Latest version is **v1.0 <small>(Build 20160712)</small>**.  
You can get old versoin in [here]({{ site.baseurl }}/{{ page.projname }}/release/index-en.html).

<a href="{{ site.baseurl }}/{{ page.projname }}/release/v1.0/Notepad-UTF8-v1.0-Installer.exe" class="btn-dark"><i class="fa fa-fw fa-archive"></i>&nbsp;&nbsp;Installer</a>
<a href="{{ site.baseurl }}/{{ page.projname }}/release/v1.0/Notepad-UTF8-v1.0-bin-x86.zip" class="btn-dark"><i class="fa fa-fw fa-tasks"></i>&nbsp;&nbsp;32bit Binary</a>
<a href="{{ site.baseurl }}/{{ page.projname }}/release/v1.0/Notepad-UTF8-v1.0-bin-x64.zip" class="btn-dark"><i class="fa fa-fw fa-tasks"></i>&nbsp;&nbsp;64bit Binary</a>
<a href="{{ site.baseurl }}/{{ page.projname }}/release/v1.0/Notepad-UTF8-v1.0-src.zip" class="btn-dark"><i class="fa fa-fw fa-gears"></i>&nbsp;&nbsp;Source</a>

# <i class="fa fa-fw fa-book"></i> Open Source License
Source code available in GitHub, licensed under MIT License.  
For API Hooking, [MinHook](https://github.com/TsudaKageyu/minhook) library is used, which is released under 2-clause BSD License.  
Binary distribution of this project is compiled with TDM-GCC-64, which links MinGW-w64's winpthreads statically.

<a href="https://github.com/ied206/Notepad-UTF8/blob/master/LICENSE" class="btn-dark"><i class="fa fa-fw fa-book"></i>&nbsp;&nbsp;License</a>

# <i class="fa fa-fw fa-file-text"></i> ChangeLog

## v1.0 <small>(Build 20160712)</small>
Initial release

- [ADD] Set running Notepad's default encoding to UTF-8
- [ADD] Set will-be executed Notepad's default encoding to UTF-8
- [ADD] Support Windows XP, Vista, 7, 8, 8.1, 10 (Build 10240, 10586)
