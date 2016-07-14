---
layout: post
title:  "BatteryLine v1.1 업데이트"
date:   2016-07-12 13:50:00 +0900
categories: main
ref:  batteryline-v1.1-release
lang: ko
---

[BatteryLine]({{ site.baseurl}}/BatteryLine)이 v1.1로 업데이트되었습니다.  

v1.0에서 추가된 기능은 없으나. 몇 가지 버그가 패치되었고 HiDPI를 지원합니다.

## 변경사항

### 설치프로그램 제공
Windows 부팅시 BatteryLine가 자동으로 실행되도록 설정해주는 설치프로그램을 제공합니다.

### HiDPI 지원
Windows 태블릿은 대부분 HiDPI 환경이지만 v1.0은 HiDPI를 제대로 지원하지 못했습니다.  
v1.1은 System Awareness 레벨의 HIDPI를 지원하여 더 이상 흐릿하게 표시되지 않습니다.

### 설정 파일 탐색 방법 개선
BatteryLine은 설정을 BatteryLine.ini에서 읽습니다.  
v1.0은 ini 파일을 자신이 실행중인 디렉토리에서 찾았으나, 이 경우 자잘한 문제가 존재합니다.  
v1.1은 ini 파일을 exe 파일이 있는 폴더 내에서 찾도록 패치하여 버그를 수정하였습니다.

### 인자 옵션 추가
BatteryLine을 실행할 때 풍선 알림없이 조용히 실행되도록 하는 -q 인자를 추가하였습니다.
