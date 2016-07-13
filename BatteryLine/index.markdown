---
layout: project
projname: BatteryLine
title: <i class="fa fa-fw fa-battery-3"></i> BatteryLine
tagline: 배터리의 잔량을 화면에 항상 표시해 줍니다.
github: https://github.com/ied206/BatteryLine
ref: batteryline-index
lang: ko
---

# <i class="fa fa-fw fa-commenting"></i> 소개
노트북 및 태블릿의 배터리 잔량을 화면 가장자리에 직선으로 표시해주는 윈도우용 프로그램입니다.  
전체화면으로 동영상을 시청하거나 게임을 하고 있을 때 배터리 잔량 확인에 유용합니다.  

# <i class="fa fa-fw fa-check"></i> 시스템 요구사항
Windows Vista 이상을 지원합니다.

# <i class="fa fa-fw fa-cloud"></i> 다운로드
최신버젼은 **v1.1 <small>(Build 20160712)</small>** 입니다.  
구버젼은 [여기]({{ site.baseurl }}/{{ page.projname }}/release)서 받으실 수 있습니다.

<a href="{{ site.baseurl }}/{{ page.projname }}/release/v1.1/BatteryLine-v1.1-Installer.exe" class="btn-dark"><i class="fa fa-fw fa-archive"></i>&nbsp;&nbsp;Installer</a>
<a href="{{ site.baseurl }}/{{ page.projname }}/release/v1.1/BatteryLine-v1.1-bin-x86.zip" class="btn-dark"><i class="fa fa-fw fa-tasks"></i>&nbsp;&nbsp;32bit Binary</a>
<a href="{{ site.baseurl }}/{{ page.projname }}/release/v1.1/BatteryLine-v1.1-bin-x64.zip" class="btn-dark"><i class="fa fa-fw fa-tasks"></i>&nbsp;&nbsp;64bit Binary</a>
<a href="{{ site.baseurl }}/{{ page.projname }}/release/v1.1/BatteryLine-v1.1-src.zip" class="btn-dark"><i class="fa fa-fw fa-gears"></i>&nbsp;&nbsp;Source</a>

# <i class="fa fa-fw fa-book"></i> 오픈소스 라이센스
소스 코드는 MIT License 하에 GitHub에 공개되어 있습니다.  
배포되는 바이너리는 TDM-GCC-64로 컴파일되었으며, MinGW-w64의 winpthreads가 사용되었습니다.  

<a href="https://github.com/ied206/BatteryLine/blob/master/LICENSE" class="btn-dark"><i class="fa fa-fw fa-book"></i>&nbsp;&nbsp;License</a>

# <i class="fa fa-fw fa-file-text"></i> 버전별 변경사항

## v1.1 <small>(Build 20160712)</small>
- [추가] HiDPI 지원 (System Aware)
- [버그수정] 설정 파일 탐색 방법 개선
- [추가] 알림 없이 실행되는 인자 지원 (-q)
- [추가] 도움말 실행용 인자 지원 (-h)

## v1.0 <small>(Build 20160124)</small>
최초 공개 버젼

- [추가] 충전시 전원 표시줄 숨기기 여부 선택
- [추가] 전원 표시줄 위치를 화면 위/아래/왼쪽/아래쪽 중 선택
- [추가] 작업 표시줄을 피해서 전원 표시줄을 표시여부 선택
- [추가] 전원 표시줄 투명도 설정
- [추가] 전원 표시줄 두께 설정
- [추가] 다중 모니터 환경에서 전원 표시줄을 원하는 모니터에 출력 (실험적)
- [추가] 충전/방전 여부에 따라 전원 표시줄의 색을 설정
- [추가] 배터리 잔량에 따라 전원 표시줄의 색을 선택
