
Application Data (Range.app)
============================

Module to access application values that remain unchanged during runtime.

.. module:: Range.app

.. data:: range_version

   The Range Engine version as a tuple of 3 ints, eg. (1, 4, 100).

   .. note:: Version tuples can be compared simply with (in)equality symbols;
             for example, ``(1, 4, 100) <= (1, 4, 100)`` returns True (lexical order).

   :type: tuple of three ints

.. data:: range_version_string

   The Range Engine version formatted as a string, eg. "1.4.100".

   :type: str

.. data:: version

   The Blender/Range version as a tuple of 3 ints, eg. (2, 79, 1).

   .. note::

      Version tuples can be compared simply with (in)equality symbols;
      for example, ``(2, 78, 5) <= (2, 79, 0)`` returns True (lexical order).

   :type: tuple of three ints

.. data:: version_string

   The Blender/Range version formatted as a string, eg. "2.79 (sub 1)".

   :type: str

.. data:: version_char

   The Blender/Range version character (for minor releases).

   :type: str

.. data:: Range_version

   The UPRange version as a tuple of 3 ints, eg. (0, 2, 3).

   .. note:: Version tuples can be compared simply with (in)equality symbols;
             for example, ``(0, 2, 2) <= (0, 2, 3)`` returns True (lexical order).

   :type: tuple of three ints

.. data:: Range_version_string

   The UPRange version formatted as a string, eg. "0.2 (sub 3)".

   :type: str

.. data:: has_texture_ffmpeg

   True if the Range has been built with FFmpeg support,
   enabling use of :class:`~Range.texture.ImageFFmpeg` and :class:`~Range.texture.VideoFFmpeg`.

   :type: bool

.. data:: has_joystick

   True if the Range has been built with joystick support.

   :type: bool

.. data:: has_physics

   True if the Range has been built with physics support.

   :type: bool
