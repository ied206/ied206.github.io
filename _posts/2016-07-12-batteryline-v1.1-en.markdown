---
layout: post
title:  BatteryLine v1.1 Update
date:   2016-07-12 13:50:00 +0900
categories: main
ref:  batteryline-v1.1-release
lang: en
---

[BatteryLine]({{ site.baseurl}}/BatteryLine) is updated to v1.1.

It does not have new features, but fixed a few bugs and support HiDPI.

## ChangeLog

### Provide Installer
Installer which set BatteryLine to run after booting is now provided.

### Support HiDPI
Most Windows tablet is HiDPI environment, and BatteryLine v1.0 did not support it.  
v1.1 support System Awareness level of HiDPI.

### Improved Setting file search algorithm
BatteryLine read its settings from BatteryLine.ini.  
v1.0 searched ini file from its running curreny directory, as a result it contained some bugs.  
v1.1 searches ini file in folder which exe file is in, so the bugs are fixed.

### Add argument options
-q argument which removes notification is added.
