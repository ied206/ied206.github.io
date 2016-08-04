---
layout: project
projname: Notepad-UTF8
title: <i class="fa fa-fw fa-edit"></i> Notepad-UTF8
tagline: 메모장의 기본 인코딩을 UTF-8로 고정합니다.
github: https://github.com/ied206/Notepad-UTF8
ref: notepad-utf8-index
lang: ko
---

# <i class="fa fa-fw fa-commenting"></i> 소개
메모장의 기본 인코딩을 ANSI에서 UTF-8로 바꿔줍니다.  
더 이상 EUC-KR에 시달리지 마세요!

# <i class="fa fa-fw fa-check"></i> 시스템 요구사항
Windows XP부터 10까지 지원합니다.  
자세한 사항은 GitHub에서 확인하실 수 있습니다.

# <i class="fa fa-fw fa-cloud"></i> 다운로드
최신버젼은 **v1.1 (Build 20160804)** 입니다.  
구버젼은 [여기]({{ site.baseurl }}/{{ page.projname }}/release)서 받으실 수 있습니다.

<a href="{{ site.baseurl }}/{{ page.projname }}/release/v1.1/Notepad-UTF8-v1.1-Installer.exe" class="btn-dark"><i class="fa fa-fw fa-archive"></i>&nbsp;&nbsp;Installer</a>
<a href="{{ site.baseurl }}/{{ page.projname }}/release/v1.1/Notepad-UTF8-v1.1-bin-x86.zip" class="btn-dark"><i class="fa fa-fw fa-tasks"></i>&nbsp;&nbsp;32bit Binary</a>
<a href="{{ site.baseurl }}/{{ page.projname }}/release/v1.1/Notepad-UTF8-v1.1-bin-x64.zip" class="btn-dark"><i class="fa fa-fw fa-tasks"></i>&nbsp;&nbsp;64bit Binary</a>
<a href="{{ site.baseurl }}/{{ page.projname }}/release/v1.1/Notepad-UTF8-v1.1-src.zip" class="btn-dark"><i class="fa fa-fw fa-gears"></i>&nbsp;&nbsp;Source</a>

# <i class="fa fa-fw fa-book"></i> 오픈소스 라이센스
소스 코드는 MIT License 하에 GitHub에 공개되어 있습니다.  
API 후킹을 위해 BSD License 하에 공개된 [MinHook](https://github.com/TsudaKageyu/minhook) 라이브러리를 사용하였습니다.  
배포되는 바이너리는 TDM-GCC-64로 컴파일되었으며, MinGW-w64의 winpthreads가 사용되었습니다.  

<a href="https://github.com/ied206/Notepad-UTF8/blob/master/LICENSE" class="btn-dark"><i class="fa fa-fw fa-book"></i>&nbsp;&nbsp;License</a>

# <i class="fa fa-fw fa-file-text"></i> 버전별 변경사항

## v1.1 <small>(Build 20160804)</small>
- [추가] Windows 10 Redstone (v1607) 지원 추가
- [버그수정] explorer.exe 크래시에 대한 안정성 패치

## v1.0 <small>(Build 20160712)</small>
최초 공개 버젼

- [추가] 기존에 실행되고 있는 메모장의 기본 인코딩을 UTF-8로 설정
- [추가] 새로 실행되는 메모장의 기본 인코딩을 UTF-8로 설정
- [추가] XP, Vista, 7, 8, 8.1, 10 (Build 10240, 10586) 지원
