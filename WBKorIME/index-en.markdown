---
layout: project
projname: WBKorIME
title: <i class="fa fa-fw fa-file-text"></i> Korean IME for WinPESE
tagline: Korean IME for theoven.org's WinPESE projects.
otherbtn: Get Plugin
otherbtn-url: http://win10se.cwcodes.net/Projects/Win10PESE/Tweaks/Korean_IME.script
ref: wbkorime-index
lang: en
---

# <i class="fa fa-fw fa-commenting"></i> About
This plugin provide Korean IME to [TheOven.org](http://theoven.org)'s WinPESE Projects.    
WinPESE Project customizes Microsoft's Windows PE.

# <i class="fa fa-fw fa-check"></i> Supported Projects
This plugin supports Win7PESE, Win8PESE, Win8.1SE, Win10PESE.

# <i class="fa fa-fw fa-cloud"></i> Download
Latest version is **v20 (2016.05.16)**.  

This plugin is included in WinPESE Projects by default.  
If you want to download this plugin only, grap it from [here](http://win10se.cwcodes.net/Projects/Win10PESE/Tweaks/Korean_IME.script).  
Want to ask or suggest somthing? Post to [TheOven official thread](http://theoven.org/index.php?topic=1440.0).

# <i class="fa fa-fw fa-file-text"></i> ChangeLog

## v1 <small>(2013.12.26)</small>
- [BASE] Initial release based on [Zerozinny's Korean support plugin for Win7PESE](http://cafe.naver.com/jinny/1633)
- [ADD] Win8PESE, Win8.1SE support

## v2 <small>(2014.01.01)</small>
- [CHANGE] Changed logo
- [DELETE] 'Set Timezone to Seoul' option is removed because of duplicate
- [BUGFIX] WOW64 support in 64bit PE

## v3 <small>(2014.01.07)</small>
- [BUFGIX] Remove dependency of 'Add All Keyboards' option

## v4 <small>(2014.01.08, by ChrisR)</small>
- [ADD] Win7PESE support
- [ADD] Add mui files for multilingual support

## v5 <small>(2014.01.09)</small>
- [BUGFIX] Ensure plugin to work properly in Win7PESE, Win8PESE, Win8.1SE

## v6 <small>(2014.01.10)</small>
- [CHANGE] Internal registry registration method changed

## v7 <small>(2014.01.10)</small>
- [ADD] Choose IME Toolbar's position in Background/Taskbar/Hide

## v8 <small>(2015.10.06)</small>
- [ADD] Win10PESE support
- [BUGFIX] Fix invalid KeyboardLayout registry value

## v9 <small>(2015.10.11)</small>
- [BUGFIX] Windows source version recognition error fix
- [ENHANCE] Enhanced options to set IME Toolbar's position
- [BUGFIX] Method for registering Win7PESE registry values

## v11 <small>(2015.10.16, by Lancelot)</small>
- [BUGFIX] In Win8PESE and later, when IME Toolbar's position is set, it no longer overwrites system's other settings
- [DEPEND] Macro Library v48.127 dependency

## v12 <small>(2015.10.18)</small>
- [ADD] Adapt to inexistance of gulim.ttc in non-Korean Windows 10 installation media
- [ADD] Can use D2Coding font instead of Gulimche in console

## v14 <small>(2015.10.18, by Lancelot)</small>
- [CHANGE] Change adaption method to deal with inexistance of gulim.ttc
- [CHANGE] Instead of downloading D2Coding, use embedded version of D2Coding

## v15 <small>(2015.10.29)</small>
- [ADD] Choose Notepad's default font between D2Coding, Malgun Gothic and GulimChe
- [ENHANCE] Enhancement in font setting UI and help message

## v16 <small>(2016.03.26, by Lancelot)</small>
- [BUGFIX] Workaround for WinBuilder's float comparison bug

## v18 <small>(2016.03.28)</small>
- [BUGFIX] Copies RegSvr32 and its dependency
- [CHANGE] Update D2Coding font to 1.1 from 1.0
- [BUGFIX] Fixed bug which is triggered when D2Coding is extracted

## v19 <small>(2016.03.30)</small>
- [BUGFIX] `Use D2Coding in Console` option now workes properly in Win7PESE, Win8PESE, Win8.1SE

## v20 <small>(2016.05.16)</small>
- [BUGFIX] Bug related to `Get gulim.ttc form host` fixed
