---
layout: project
projname: NPKICracker
title: <i class="fa fa-fw fa-lock"></i> NPKICracker
tagline: 공인인증서의 비밀번호를 브루트포싱합니다.
github: https://github.com/ied206/NPKICracker
zipball: https://github.com/ied206/NPKICracker/zipball/master
tarball: https://github.com/ied206/NPKICracker/tarball/master
ref: npkicracker-index
lang: ko
---

# <i class="fa fa-fw fa-comment"></i> 소개
NPKICracker는 공인인증서를 브루트포싱하는 프로그램입니다.  
주의! 학술적 목적으로 제작되었으며, 매우 느립니다.

NPKICracker의 GPGPU 코드는 [KUICS](https://kuics.korea.ac.kr)의 [이준혁](https://github.com/leejh10003)에 의해 작성되었습니다.

### <i class="fa fa-fw fa-external-link"></i> Incognito 2015
NPKICracker는 [Incognito Hacking Conference](http://inc0gnito.com/) 2015의 **공인인증서 크래킹** 발표를 위해 제작되었습니다.

<a href="http://www.slideshare.net/ied206/4th-inc0gnito" class="btn-dark"><i class="fa fa-fw fa-slideshare"></i>&nbsp;&nbsp;발표자료</a>

# <i class="fa fa-fw fa-check"></i> 시스템 요구사항
NPKICracker는 OpenMP로 작성되었으며, 크로스플랫폼입니다.  

Windows, Linux, macOS 모두를 지원하며 Windows와 Linux에서 테스트하였습니다.  

# <i class="fa fa-fw fa-cloud"></i> 다운로드
최신버젼은 **v1.2 (20160714)** 입니다.  
구버젼은 [여기]({{ site.baseurl }}/{{ page.projname }}/release)서 받으실 수 있습니다.

<a href="{{ site.baseurl }}/{{ page.projname }}/release/v1.2/NPKICracker-v1.2-src.tar.gz" class="btn-dark"><i class="fa fa-fw fa-archive"></i>&nbsp;&nbsp;Download</a>

# <i class="fa fa-fw fa-book"></i> 오픈소스 라이센스
소스 코드는 MIT License 하에 GitHub에 공개되어 있습니다.  

<a href="https://github.com/ied206/DriverPicker/blob/master/LICENSE" class="btn-dark"><i class="fa fa-fw fa-book"></i>&nbsp;&nbsp;License</a>

# <i class="fa fa-fw fa-file-text"></i> 버전별 변경사항

## v1.2 <small>(20160614)</small>
- [버그수정] OpenMP 관련 초기화 코드 수정

## v1.1 <small>(20151222)</small>
- [변경] 브루트포싱시 비밀번호 생성 알고리즘 변경

## v1.0 <small>(20150830)</small>
최초 공개 버젼

- [추가] yessign 공인인증서 브루트포싱 지원
- [추가] OpenMP 지원
