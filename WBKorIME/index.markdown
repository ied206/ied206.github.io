---
layout: project
projname: WBKorIME
title: <i class="fa fa-fw fa-file-text"></i> WinPESE 한국어 입력기 플러그인
tagline: theoven.org의 WinPESE 프로젝트에 한국어 입력기를 제공합니다.
otherbtn: Get Plugin
otherbtn-url: http://win10se.cwcodes.net/Projects/Win10PESE/Tweaks/Korean_IME.script
ref: wbkorime-index
lang: ko
---

# <i class="fa fa-fw fa-commenting"></i> 소개
[TheOven.org](http://theoven.org)의 WinPESE 프로젝트에 한국어 입력기를 제공합니다.  
WinPESE 프로젝트는 Windows PE를 커스터마이징하는 프로젝트입니다.  
자세한 설명과 사용법은 [WinPESE 시리즈 빌드 강의](http://cafe.naver.com/computerlife/33733)를 참고하세요.

# <i class="fa fa-fw fa-check"></i> 지원 프로젝트
Win7PESE, Win8PESE, Win8.1SE, Win10PESE를 지원합니다.  

# <i class="fa fa-fw fa-cloud"></i> 다운로드
최신버젼은 **v20 (2016.05.16)** 입니다.  

이 플러그인은 WinPESE 프로젝트에 기본적으로 포함되어 배포되며, 별도로 다운받을 필요가 없습니다.  
플러그인 파일만 별도로 다운받고 싶으시면 [여기](http://win10se.cwcodes.net/Projects/Win10PESE/Tweaks/Korean_IME.script)에서 받을 수 있습니다.  
문의 및 건의할 사항이 있으면 [TheOven 공식 쓰레드](http://theoven.org/index.php?topic=1440.0)를 통해 해주시기 바랍니다.

# <i class="fa fa-fw fa-file-text"></i> 버전별 변경사항

## v20 <small>(2016.05.16)</small>
- [버그수정] 호스트에서 gulim.ttc를 제대로 복사하지 못하는 문제 해결

## v19 <small>(2016.03.30)</small>
- [버그수정] `콘솔 창에 D2Coding 글꼴 사용` 기능이 Win7PESE, Win8PESE, Win8.1SE에서 제대로 작동하도록 수정

## v18 <small>(2016.03.28)</small>
- [버그수정] RegSvr32와 RegSvr32의 의존성을 복사
- [변경] D2Coding 글꼴을 1.0에서 1.1로 업데이트
- [버그수정] D2Coding 글꼴의 압축을 해제할 때 발생하던 문제 해결

## v16 <small>(2016.03.26, by Lancelot)</small>
- [버그수정] WinBuilder의 소숫점 비교연산 오류 대응책 적용

## v15 <small>(2015.10.29)</small>
- [추가] 메모장 기본 글꼴로 D2Coding 선택 가능
- [개선] 글꼴 설정 관련 UI, 도움말 보강

## v14 <small>(2015.10.18, by Lancelot)</small>
- [변경] 한국어가 아닌 Windows 10 설치 미디어에 gulim.ttc의 부재 대응 방법 수정
- [변경] D2Coding 글꼴을 다운로드하는 대신 첨부된 글꼴을 사용하도록 변경

## v12 <small>(2015.10.18)</small>
- [추가] 한국어가 아닌 Windows 10 설치 미디어에 gulim.ttc가 없는 것 대응
- [추가] 콘솔 창에 굴림체 대신 D2Coding 글꼴 사용 가능

## v11 <small>(2015.10.16, by Lancelot)</small>
- [버그수정] Win8PESE 이상에서 IME 도구모음 위치를 설정할 때 다른 설정을 덮어쓰지 않도록 변경
- [의존성] Macro Library v48.127 의존성

## v9 <small>(2015.10.11)</small>
- [버그수정] WinPESE 버젼 인식 오류 수정
- [개선] IME 도구모음 위치 설정 개편
- [버그수정] Win7PESE용 레지스트리 등록 방법 수정

## v8 <small>(2015.10.06)</small>
- [추가] Win10PESE 지원 추가
- [버그수정] KeyboardLayout 레지스트리 값 오류 수정

## v7 <small>(2014.01.10)</small>
- [추가] IME 도구모음 위치를 바탕화면/작업표시줄/숨김 중 선택

## v6 <small>(2014.01.10)</small>
- [변경] 레지스트리 등록 방법 변경

## v5 <small>(2014.01.09)</small>
- [버그수정] Win7PESE, Win8PESE, Win8.1SE에서 제대로 작동하도록 수정

## v4 <small>(2014.01.08, by ChrisR)</small>
- [추가] Win7PESE 지원 추가
- [추가] 다중 언어 지원을 위한 mui 파일 추가

## v3 <small>(2014.01.07)</small>
- [버그수정] Add All Keyboards 설정 의존성 제거

## v2 <small>(2014.01.01)</small>
- [변경] 로고 변경
- [삭제] 시간대를 서울로 설정하는 기능 삭제 (중복)
- [버그수정] 64비트 PE에서 WOW64 지원

## v1 <small>(2013.12.26)</small>
- [기반] [지니님의 Win7PESE용 한국어 입력기](http://cafe.naver.com/jinny/1633)를 기반으로 제작
- [추가] Win8PESE, Win8.1SE 지원
