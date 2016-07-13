---
layout: project
projname: DriverPicker
title: <i class="fa fa-fw fa-search"></i>DriverPicker
tagline: 드라이버 모음집에서 특정 윈도우 버젼을 위한 드라이버를 추출합니다.
github: https://github.com/ied206/DriverPicker
zipball: https://github.com/ied206/DriverPicker/zipball/master
tarball: https://github.com/ied206/DriverPicker/tarball/master
ref: driverpicker-index
lang: ko
---

# <i class="fa fa-fw fa-comment"></i> 소개
DriverPicker는 [DriverPacks Solution](https://drp.su)에서 특정 윈도우 버젼에 맞는 드라이버만을 추출해주는 도구입니다.
예를 들어, 7, 8, 8.1, 10 드라이버들이 뒤엉킨 폴더에서 Windows 10 x64를 지원하는 드라이버만을 추출할 수 있습니다.
DriverPicker는 DriverPacks Solution 외에도 다른 드라이버 모음집과 함께 사용할 수 있습니다.

### <i class="fa fa-fw fa-question-circle"></i> DriverPicker를 왜 만들었나요?
DriverPicker는 [theoven.org의 WinPESE](http://theoven.org/index.php?topic=1336.0)와 함께 쓰기 위해 제작되었습니다.  
WinPESE 프로젝트로 제작한 Windows PE가 제대로 작동하기 위해서는 그 Windows를 지원하는 드라이버들이 필요합니다. 하지만 대부분의 드라이버 모음집은 지원하는 Windows의 버젼에 맞게 분류되어 있지 않습니다.  
DriverPicker는 필요하지 않은 드라이버를 삭제해주며, WinPESE의 빌드 시간을 줄여주고 디스크 공간을 확보해 줍니다.

# <i class="fa fa-fw fa-check"></i> 시스템 요구사항
- [Python 3](https://www.python.org/downloads/)
- [treelib](http://xiaming.me/treelib/) 라이브러리
- [DriverPacks Solution Full](http://download.drp.su/DriverPack-Offline.torrent)와 같은 드라이버 모음집  
설치 방법과 사용법은 GitHub에서 확인하실 수 있습니다.

# <i class="fa fa-fw fa-cloud"></i> 다운로드
최신버젼은 **v1.0 (20160619)** 입니다.  
구버젼은 [여기]({{ site.baseurl }}/{{ page.projname }}/release)서 받으실 수 있습니다.

<a href="{{ site.baseurl }}/{{ page.projname }}/release/v1.0/DriverPicker-v1.0-dist.zip" class="btn-dark"><i class="fa fa-fw fa-archive"></i>&nbsp;&nbsp;Download</a>

# <i class="fa fa-fw fa-book"></i> 오픈소스 라이센스
소스 코드는 MIT License 하에 GitHub에 공개되어 있습니다.  

<a href="https://github.com/ied206/DriverPicker/blob/master/LICENSE" class="btn-dark"><i class="fa fa-fw fa-book"></i>&nbsp;&nbsp;License</a>

# <i class="fa fa-fw fa-file-text"></i> 버전별 변경사항

## v1.0 <small>(Build 20160712)</small>
최초 공개 버젼

- [추가] inf 파일의 타겟 윈도우 버젼 인식 지원
- [추가] `DriverPacks Solution` 전용 버젼 인식 지원
- [추가] 원하는 윈도우 버젼을 지원하는 드라이버만 남기고 삭제하는 기능 지원
