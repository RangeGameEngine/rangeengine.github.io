
Game Keys (Range.events)
========================

*****
Intro
*****

This module holds key constants for the SCA_KeyboardSensor.

.. module:: Range.events

.. code-block:: python

   # Set a connected keyboard sensor to accept F1
   import Range

   co = Range.logic.getCurrentController()
   # 'Keyboard' is a keyboard sensor
   sensor = co.sensors["Keyboard"]
   sensor.key = Range.events.F1KEY

.. code-block:: python

   # Do the all keys thing
   import Range

   co = Range.logic.getCurrentController()
   # 'Keyboard' is a keyboard sensor
   sensor = co.sensors["Keyboard"]

   for key, input in sensor.inputs:
   	# key[0] == Range.events.keycode = event.type, key[1] = input
   	if Range.logic.KX_INPUT_JUST_ACTIVATED in input.queue:
   		if key == Range.events.WKEY:
   			# Activate Forward!
   		if key == Range.events.SKEY:
   			# Activate Backward!
   		if key == Range.events.AKEY:
   			# Activate Left!
   		if key == Range.events.DKEY:
   			# Activate Right!

.. code-block:: python

   # The all keys thing without a keyboard sensor (but you will
   # need an always sensor with pulse mode on)
   import Range

   # Just shortening names here
   keyboard = Range.logic.keyboard
   JUST_ACTIVATED = Range.logic.KX_INPUT_JUST_ACTIVATED

   if JUST_ACTIVATED in keyboard.inputs[Range.events.WKEY].queue:
   	print("Activate Forward!")
   if JUST_ACTIVATED in keyboard.inputs[Range.events.SKEY].queue:
   	print("Activate Backward!")
   if JUST_ACTIVATED in keyboard.inputs[Range.events.AKEY].queue:
   	print("Activate Left!")
   if JUST_ACTIVATED in keyboard.inputs[Range.events.DKEY].queue:
   	print("Activate Right!")


*********
Functions
*********

.. function:: EventToString(event)

   Return the string name of a key event. Will raise a ValueError error if its invalid.

   :arg event: key event constant from :mod:`Range.events` or the keyboard sensor.
   :type event: int
   :rtype: string

.. function:: EventToCharacter(event, shift)

   Return the string name of a key event. Returns an empty string if the event cant be represented as a character.

   :type event: int
   :arg event: key event constant from :mod:`Range.events` or the keyboard sensor.
   :type shift: bool
   :arg shift: set to true if shift is held.
   :rtype: string

*********
Constants
*********

.. _mouse-keys:

==========
Mouse Keys
==========

.. data:: LEFTMOUSE
   
   :value: 116
   
.. data:: MIDDLEMOUSE
   
   :value: 117
   
.. data:: RIGHTMOUSE
   
   :value: 118

.. data:: LEFTTHUMBMOUSE

   :value: 119

.. data:: RIGHTTHUMBMOUSE

   :value: 120

.. data:: BUTTON6MOUSE

   :value: 121

.. data:: BUTTON7MOUSE

   :value: 122
   
.. data:: WHEELUPMOUSE
   
   :value: 124
   
.. data:: WHEELDOWNMOUSE
   
   :value: 125
   
.. data:: MOUSEX
   
   :value: 126
   
.. data:: MOUSEY
   
   :value: 127
   

.. _keyboard-keys:

=============
Alphabet Keys
=============

.. data:: AKEY
   
   :value: 23
   
.. data:: BKEY
   
   :value: 24
   
.. data:: CKEY
   
   :value: 25
   
.. data:: DKEY
   
   :value: 26
   
.. data:: EKEY
   
   :value: 27
   
.. data:: FKEY
   
   :value: 28
   
.. data:: GKEY
   
   :value: 29
   
.. data:: HKEY
   
   :value: 30
   
.. data:: IKEY
   
   :value: 31
   
.. data:: JKEY
   
   :value: 32
   
.. data:: KKEY
   
   :value: 33
   
.. data:: LKEY
   
   :value: 34
   
.. data:: MKEY
   
   :value: 35
   
.. data:: NKEY
   
   :value: 36
   
.. data:: OKEY
   
   :value: 37
   
.. data:: PKEY
   
   :value: 38
   
.. data:: QKEY
   
   :value: 39
   
.. data:: RKEY
   
   :value: 40
   
.. data:: SKEY
   
   :value: 41
   
.. data:: TKEY
   
   :value: 42
   
.. data:: UKEY
   
   :value: 43
   
.. data:: VKEY
   
   :value: 44
   
.. data:: WKEY
   
   :value: 45
   
.. data:: XKEY
   
   :value: 46
   
.. data:: YKEY
   
   :value: 47
   
.. data:: ZKEY
   
   :value: 48
   
===========
Number Keys
===========

.. data:: ZEROKEY
   
   :value: 13
   
.. data:: ONEKEY
   
   :value: 14
   
.. data:: TWOKEY
   
   :value: 15
   
.. data:: THREEKEY
   
   :value: 16
   
.. data:: FOURKEY
   
   :value: 17
   
.. data:: FIVEKEY
   
   :value: 18
   
.. data:: SIXKEY
   
   :value: 19
   
.. data:: SEVENKEY
   
   :value: 20
   
.. data:: EIGHTKEY
   
   :value: 21
   
.. data:: NINEKEY
   
   :value: 22
   
==============
Modifiers Keys
==============

.. data:: CAPSLOCKKEY
   
   :value: 49
   
.. data:: LEFTCTRLKEY
   
   :value: 50
   
.. data:: LEFTALTKEY
   
   :value: 51
   
.. data:: RIGHTALTKEY
   
   :value: 52
   
.. data:: RIGHTCTRLKEY
   
   :value: 53
   
.. data:: RIGHTSHIFTKEY
   
   :value: 54
   
.. data:: LEFTSHIFTKEY
   
   :value: 55
   
==========
Arrow Keys
==========

.. data:: LEFTARROWKEY
   
   :value: 69
   
.. data:: DOWNARROWKEY
   
   :value: 70
   
.. data:: RIGHTARROWKEY
   
   :value: 71
   
.. data:: UPARROWKEY
   
   :value: 72
   
==============
Numberpad Keys
==============

.. data:: PAD0
   
   :value: 84
   
.. data:: PAD1
   
   :value: 77
   
.. data:: PAD2
   
   :value: 73
   
.. data:: PAD3
   
   :value: 78
   
.. data:: PAD4
   
   :value: 74
   
.. data:: PAD5
   
   :value: 79
   
.. data:: PAD6
   
   :value: 75
   
.. data:: PAD7
   
   :value: 80
   
.. data:: PAD8
   
   :value: 76
   
.. data:: PAD9
   
   :value: 71
   
.. data:: PADPERIOD
   
   :value: 82
   
.. data:: PADSLASHKEY
   
   :value: 83
   
.. data:: PADASTERKEY
   
   :value: 9
   
.. data:: PADMINUS
   
   :value: 85
   
.. data:: PADENTER
   
   :value: 86
   
.. data:: PADPLUSKEY
   
   :value: 87
   
=============
Function Keys
=============

.. data:: F1KEY
   
   :value: 88
   
.. data:: F2KEY
   
   :value: 89
   
.. data:: F3KEY
   
   :value: 90
   
.. data:: F4KEY
   
   :value: 91
   
.. data:: F5KEY
   
   :value: 92
   
.. data:: F6KEY
   
   :value: 93
   
.. data:: F7KEY
   
   :value: 94
   
.. data:: F8KEY
   
   :value: 95
   
.. data:: F9KEY
   
   :value: 96
   
.. data:: F10KEY
   
   :value: 97
   
.. data:: F11KEY
   
   :value: 98
   
.. data:: F12KEY
   
   :value: 99
   
.. data:: F13KEY
   
   :value: 100
   
.. data:: F14KEY
   
   :value: 101
   
.. data:: F15KEY
   
   :value: 102
   
.. data:: F16KEY
   
   :value: 103
   
.. data:: F17KEY
   
   :value: 104
   
.. data:: F18KEY
   
   :value: 105
   
.. data:: F19KEY
   
   :value: 106
   
==========
Other Keys
==========

.. data:: ACCENTGRAVEKEY
   
   :value: 63
   
.. data:: BACKSLASHKEY
   
   :value: 65
   
.. data:: BACKSPACEKEY
   
   :value: 59
   
.. data:: COMMAKEY
   
   :value: 10
   
.. data:: DELKEY
   
   :value: 60
   
.. data:: ENDKEY
   
   :value: 113
   
.. data:: EQUALKEY
   
   :value: 66
   
.. data:: ESCKEY
   
   :value: 56
   
.. data:: HOMEKEY
   
   :value: 110
   
.. data:: INSERTKEY
   
   :value: 109
   
.. data:: LEFTBRACKETKEY
   
   :value: 67
   
.. data:: LINEFEEDKEY
   
   :value: 58
   
.. data:: MINUSKEY
   
   :value: 11
   
.. data:: PAGEDOWNKEY
   
   :value: 112
   
.. data:: PAGEUPKEY
   
   :value: 111
   
.. data:: PAUSEKEY
   
   :value: 108
   
.. data:: PERIODKEY
   
   :value: 12
   
.. data:: QUOTEKEY
   
   :value: 62
   
.. data:: RIGHTBRACKETKEY
   
   :value: 68
   
.. data:: RETKEY
   
   .. warning::
      Deprecated, use :py:meth:`Range.events.ENTERKEY` instead.
   
   :value: 7
   
.. data:: ENTERKEY
   
   :value: 7
   
.. data:: SEMICOLONKEY
   
   :value: 61
   
.. data:: SLASHKEY
   
   :value: 64
   
.. data:: SPACEKEY
   
   :value: 8
   
.. data:: TABKEY
   
   :value: 57
   
