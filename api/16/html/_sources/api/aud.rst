Audio System (aud)
==================

.. module:: aud

This module provides access to the audaspace audio library.

.. warning:: Currently the updated version of the aud manual is located in the Blender 2.8+ API.
            https://docs.blender.org/api/current/aud.html

Basic Sound Playback
--------------------

This script shows how to use the classes: :class:`Device`, :class:`Factory` and
:class:`Handle`.

.. literalinclude:: __/examples/aud.py

Functions
---------

.. function:: device()

Returns the application's :class:`Device`.

:return: The application's :class:`Device`.
:rtype: :class:`Device`

Device
------

.. class:: Device

   Device objects represent an audio output backend like OpenAL or SDL, but might also represent a file output or RAM buffer output.

   .. function:: lock()
   
   Locks the device so that it's guaranteed, that no samples are read from the streams until :meth:`unlock` is called.
   This is useful if you want to do start/stop/pause/resume some sounds at the same time.
   
   .. note:: The device has to be unlocked as often as locked to be able to continue playback.
   
   .. warning:: Make sure the time between locking and unlocking is as short as possible to avoid clicks.


   .. function:: play(factory, keep=False)
   
   Plays a factory.
   
   :arg factory: The factory to play.
   :type factory: :class:`Factory`
   :arg keep: See :attr:`Handle.keep`.
   :type keep: bool
   :return: The playback handle with which playback can be controlled with.
   :rtype: :class:`Handle`


   .. function:: stopAll()
   
   Stops all playing and paused sounds.


   .. function:: unlock()
   
   Unlocks the device after a lock call, see :meth:`lock` for details.


   .. attribute:: channels

      The channel count of the device.


   .. attribute:: distance_model

      The distance model of the device.
      
      .. seealso:: `OpenAL documentation <https://www.openal.org/documentation>`


   .. attribute:: doppler_factor

      The doppler factor of the device.
      This factor is a scaling factor for the velocity vectors in doppler calculation. So a value bigger than 1 will exaggerate the effect as it raises the velocity.


   .. attribute:: format

      The native sample format of the device.


   .. attribute:: listener_location

      The listeners's location in 3D space, a 3D tuple of floats.


   .. attribute:: listener_orientation

      The listener's orientation in 3D space as quaternion, a 4 float tuple.


   .. attribute:: listener_velocity

      The listener's velocity in 3D space, a 3D tuple of floats.


   .. attribute:: rate

      The sampling rate of the device in Hz.


   .. attribute:: speed_of_sound

      The speed of sound of the device.
      The speed of sound in air is typically 343.3 m/s.


   .. attribute:: volume

      The overall volume of the device.


Sound
-------

.. class:: Sound

   Sound objects are immutable and represent a sound that can be played simultaneously multiple times. They are called factories because they create reader objects internally that are used for playback.

   .. function:: file(filename)
   
   Creates a sound object of a sound file.
   
   :arg filename: Path of the file.
   :type filename: string
   :return: The created :class:`Factory` object.
   :rtype: :class:`Factory`
   
   .. warning:: If the file doesn't exist or can't be read you will not get an exception immediately, but when you try to start playback of that factory.


   .. function:: sine(frequency, rate=48000)
   
   Creates a sine factory which plays a sine wave.
   
   :arg frequency: The frequency of the sine wave in Hz.
   :type frequency: float
   :arg rate: The sampling rate in Hz. It's recommended to set this value to the playback device's samling rate to avoid resamping.
   :type rate: int
   :return: The created :class:`Factory` object.
   :rtype: :class:`Factory`


   .. function:: buffer()
   
   Buffers a factory into RAM.
   This saves CPU usage needed for decoding and file access if the underlying factory reads from a file on the harddisk, but it consumes a lot of memory.
   
   :return: The created :class:`Factory` object.
   :rtype: :class:`Factory`
   
   .. note:: Only known-length factories can be buffered.
   
   .. warning:: Raw PCM data needs a lot of space, only buffer short factories.


   .. function:: delay(time)
   
   Delays by playing adding silence in front of the other factory's data.
   
   :arg time: How many seconds of silence should be added before the factory.
   :type time: float
   :return: The created :class:`Factory` object.
   :rtype: :class:`Factory`


   .. function:: fadein(start, length)
   
   Fades a factory in by raising the volume linearly in the given time interval.
   
   :arg start: Time in seconds when the fading should start.
   :type start: float
   :arg length: Time in seconds how long the fading should last.
   :type length: float
   :return: The created :class:`Factory` object.
   :rtype: :class:`Factory`
   
   .. note:: Before the fade starts it plays silence.


   .. function:: fadeout(start, length)
   
   Fades a factory in by lowering the volume linearly in the given time interval.
   
   :arg start: Time in seconds when the fading should start.
   :type start: float
   :arg length: Time in seconds how long the fading should last.
   :type length: float
   :return: The created :class:`Factory` object.
   :rtype: :class:`Factory`
   
   .. note:: After the fade this factory plays silence, so that the length of the factory is not altered.


   .. function:: filter(b, a = (1))
   
   Filters a factory with the supplied IIR filter coefficients.
   Without the second parameter you'll get a FIR filter.
   If the first value of the a sequence is 0 it will be set to 1 automatically.
   If the first value of the a sequence is neither 0 nor 1, all filter coefficients will be scaled by this value so that it is 1 in the end, you don't have to scale yourself.
   
   :arg b: The nominator filter coefficients.
   :type b: sequence of float
   :arg a: The denominator filter coefficients.
   :type a: sequence of float
   :return: The created :class:`Factory` object.
   :rtype: :class:`Factory`


   .. function:: highpass(frequency, Q=0.5)
   
   Creates a second order highpass filter based on the transfer function H(s) = s^2 / (s^2 + s/Q + 1)
   
   :arg frequency: The cut off trequency of the highpass.
   :type frequency: float
   :arg Q: Q factor of the lowpass.
   :type Q: float
   :return: The created :class:`Factory` object.
   :rtype: :class:`Factory`


   .. function:: join(factory)
   
   Plays two factories in sequence.
   
   :arg factory: The factory to play second.
   :type factory: :class:`Factory`
   :return: The created :class:`Factory` object.
   :rtype: :class:`Factory`
   
   .. note:: The two factories have to have the same specifications (channels and samplerate).


   .. function:: limit(start, end)
   
   Limits a factory within a specific start and end time.
   
   :arg start: Start time in seconds.
   :type start: float
   :arg end: End time in seconds.
   :type end: float
   :return: The created :class:`Factory` object.
   :rtype: :class:`Factory`


   .. function:: loop(count)
   
   Loops a factory.
   
   :arg count: How often the factory should be looped. Negative values mean endlessly.
   :type count: integer
   :return: The created :class:`Factory` object.
   :rtype: :class:`Factory`
   
   .. note:: This is a filter function, you might consider using :attr:`Handle.loop_count` instead.


   .. function:: lowpass(frequency, Q=0.5)
   
   Creates a second order lowpass filter based on the transfer function H(s) = 1 / (s^2 + s/Q + 1)
   
   :arg frequency: The cut off trequency of the lowpass.
   :type frequency: float
   :arg Q: Q factor of the lowpass.
   :type Q: float
   :return: The created :class:`Factory` object.
   :rtype: :class:`Factory`


   .. function:: mix(factory)
   
   Mixes two factories.
   
   :arg factory: The factory to mix over the other.
   :type factory: :class:`Factory`
   :return: The created :class:`Factory` object.
   :rtype: :class:`Factory`
   
   .. note:: The two factories have to have the same specifications (channels and samplerate).


   .. function:: pingpong()
   
   Plays a factory forward and then backward.
   This is like joining a factory with its reverse.
   
   :return: The created :class:`Factory` object.
   :rtype: :class:`Factory`


   .. function:: pitch(factor)
   
   Changes the pitch of a factory with a specific factor.
   
   :arg factor: The factor to change the pitch with.
   :type factor: float
   :return: The created :class:`Factory` object.
   :rtype: :class:`Factory`
   
   .. note:: This is done by changing the sample rate of the underlying factory, which has to be an integer, so the factor value rounded and the factor may not be 100 % accurate.
   
   .. note:: This is a filter function, you might consider using :attr:`Handle.pitch` instead.


   .. function:: reverse()
   
   Plays a factory reversed.
   
   :return: The created :class:`Factory` object.
   :rtype: :class:`Factory`
   
   .. note:: The factory has to have a finite length and has to be seekable. It's recommended to use this only with factories	 with fast and accurate seeking, which is not true for encoded audio files, such ones should be buffered using :meth:`buffer` before being played reversed.
   
   .. warning:: If seeking is not accurate in the underlying factory you'll likely hear skips/jumps/cracks.


   .. function:: square(threshold = 0)
   
   Makes a square wave out of an audio wave by setting all samples with a amplitude >= threshold to 1, all <= -threshold to -1 and all between to 0.
   
   :arg threshold: Threshold value over which an amplitude counts non-zero.
   :type threshold: float
   :return: The created :class:`Factory` object.
   :rtype: :class:`Factory`


   .. function:: volume(volume)
   
   Changes the volume of a factory.
   
   :arg volume: The new volume..
   :type volume: float
   :return: The created :class:`Factory` object.
   :rtype: :class:`Factory`
   
   .. note:: Should be in the range [0, 1] to avoid clipping.
   
   .. note:: This is a filter function, you might consider using :attr:`Handle.volume` instead.


Handle
------

.. class:: Handle

   Handle objects are playback handles that can be used to control playback of a sound. If a sound is played back multiple times then there are as many handles.

   .. function:: pause()
   
   Pauses playback.
   
   :return: Whether the action succeeded.
   :rtype: bool


   .. function:: resume()
   
   Resumes playback.
   
   :return: Whether the action succeeded.
   :rtype: bool


   .. function:: stop()
   
   Stops playback.
   
   :return: Whether the action succeeded.
   :rtype: bool
   
   .. note:: This makes the handle invalid.


   .. attribute:: attenuation

      This factor is used for distance based attenuation of the source.
      
      .. seealso:: :attr:`Device.distance_model`


   .. attribute:: cone_angle_inner

      The opening angle of the inner cone of the source. If the cone values of a source are set there are two (audible) cones with the apex at the :attr:`location` of the source and with infinite height, heading in the direction of the source's :attr:`orientation`.
      In the inner cone the volume is normal. Outside the outer cone the volume will be :attr:`cone_volume_outer` and in the area between the volume will be interpolated linearly.


   .. attribute:: cone_angle_outer

      The opening angle of the outer cone of the source.
      
      .. seealso:: :attr:`cone_angle_inner`


   .. attribute:: cone_volume_outer

      The volume outside the outer cone of the source.
      
      .. seealso:: :attr:`cone_angle_inner`


   .. attribute:: distance_maximum

      The maximum distance of the source.
      If the listener is further away the source volume will be 0.
      
      .. seealso:: :attr:`Device.distance_model`


   .. attribute:: distance_reference

      The reference distance of the source.
      At this distance the volume will be exactly :attr:`volume`.
      
      .. seealso:: :attr:`Device.distance_model`


   .. attribute:: keep

      Whether the sound should be kept paused in the device when its end is reached.
      This can be used to seek the sound to some position and start playback again.
      
      .. warning:: If this is set to true and you forget stopping this equals a memory leak as the handle exists until the device is destroyed.


   .. attribute:: location

      The source's location in 3D space, a 3D tuple of floats.


   .. attribute:: loop_count

      The (remaining) loop count of the sound. A negative value indicates infinity.


   .. attribute:: orientation

      The source's orientation in 3D space as quaternion, a 4 float tuple.


   .. attribute:: pitch

      The pitch of the sound.


   .. attribute:: position

      The playback position of the sound in seconds.


   .. attribute:: relative

      Whether the source's location, velocity and orientation is relative or absolute to the listener.


   .. attribute:: status

      Whether the sound is playing, paused or stopped (=invalid).


   .. attribute:: velocity

      The source's velocity in 3D space, a 3D tuple of floats.


   .. attribute:: volume

      The volume of the sound.


   .. attribute:: volume_maximum

      The maximum volume of the source.
      
      .. seealso:: :attr:`Device.distance_model`


   .. attribute:: volume_minimum

      The minimum volume of the source.
      
      .. seealso:: :attr:`Device.distance_model`

.. class:: error

Constants
---------

.. data:: AUD_DEVICE_JACK

   constant value 3

.. data:: AUD_DEVICE_NULL

   constant value 0

.. data:: AUD_DEVICE_OPENAL

   constant value 1

.. data:: AUD_DEVICE_SDL

   constant value 2

.. data:: AUD_DISTANCE_MODEL_EXPONENT

   constant value 5

.. data:: AUD_DISTANCE_MODEL_EXPONENT_CLAMPED

   constant value 6

.. data:: AUD_DISTANCE_MODEL_INVALID

   constant value 0

.. data:: AUD_DISTANCE_MODEL_INVERSE

   constant value 1

.. data:: AUD_DISTANCE_MODEL_INVERSE_CLAMPED

   constant value 2

.. data:: AUD_DISTANCE_MODEL_LINEAR

   constant value 3

.. data:: AUD_DISTANCE_MODEL_LINEAR_CLAMPED

   constant value 4

.. data:: AUD_FORMAT_FLOAT32

   constant value 36

.. data:: AUD_FORMAT_FLOAT64

   constant value 40

.. data:: AUD_FORMAT_INVALID

   constant value 0

.. data:: AUD_FORMAT_S16

   constant value 18

.. data:: AUD_FORMAT_S24

   constant value 19

.. data:: AUD_FORMAT_S32

   constant value 20

.. data:: AUD_FORMAT_U8

   constant value 1

.. data:: AUD_STATUS_INVALID

   constant value 0

.. data:: AUD_STATUS_PAUSED

   constant value 2

.. data:: AUD_STATUS_PLAYING

   constant value 1

.. data:: AUD_STATUS_STOPPED

   constant value 3

.. _aud-sound-effects:

-----------------------
Constants Audio Effects
-----------------------

.. data:: AUDIO_EFFECT_INVALID

   constant value 0

.. data:: AUDIO_EFFECT_REVERB

   constant value 1

.. _aud-sound-filter:

------------------------------
Constants Audio Filter Effects
------------------------------

.. data:: AUDIO_FILTER_INVALID

   constant value 0

.. data:: AUDIO_FILTER_LOWPASS

   constant value 1

.. data:: AUDIO_FILTER_HIGHPASS

   constant value 2

.. data:: AUDIO_FILTER_BANDPASS

   constant value 3