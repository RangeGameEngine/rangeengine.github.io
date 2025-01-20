KX_Speaker(SCA_IObject)
===============================

base class --- :class:`SCA_IObject`

.. class:: KX_Speaker(SCA_IObject)

   Sound Speaker.

   .. attribute:: volume

      The volume (gain) of the sound.

      :type: float

   .. attribute:: time

      The current position in the audio stream (in seconds).

      :type: float

   .. attribute:: pitch

      The pitch of the sound.

      :type: float

   .. attribute:: mode

      The operation mode of the actuator. Can be one of :ref:`these constants<logic-sound-actuator>`

      :type: integer

   .. attribute:: sound

      The sound the actuator should play.

      :type: Audaspace factory

   .. attribute:: is3D

      Whether or not the actuator should be using 3D sound. (read-only)

      :type: boolean

   .. attribute:: volume_maximum

      The maximum gain of the sound, no matter how near it is.

      :type: float

   .. attribute:: volume_minimum

      The minimum gain of the sound, no matter how far it is away.

      :type: float

   .. attribute:: distance_reference

      The distance where the sound has a gain of 1.0.

      :type: float

   .. attribute:: distance_maximum

      The maximum distance at which you can hear the sound.

      :type: float

   .. attribute:: attenuation

      The influence factor on volume depending on distance.

      :type: float

   .. attribute:: cone_angle_inner

      The angle of the inner cone.

      :type: float

   .. attribute:: cone_angle_outer

      The angle of the outer cone.

      :type: float

   .. attribute:: cone_volume_outer

      The gain outside the outer cone (the gain in the outer cone will be interpolated between this value and the normal gain in the inner cone).

      :type: float

   .. method:: Play()

      Starts the sound.

      :return: None
   
   .. method:: Restart()

      Restart the sound.

      :return: None

   .. method:: Pause()

      Pauses the sound.

      :return: None

   .. method:: Stop()

      Stops the sound.

      :return: None

   .. method:: SetSound(sound, cache=False)

      Set a new sound.

      :arg sound: A loaded sound with aud.Sound().
      :type sound: :class:`Sound`

      :arg cache: Caches a sound into RAM. This saves CPU usage needed for decoding and file access if the underlying sound reads from a file on the harddisk, but it consumes a lot of memory.
      :type cache: bool

   *************
   Audio Effects
   *************

   .. method:: SetEffect(type=aud.AUDIO_EFFECT_INVALID, filter=aud.AUDIO_FILTER_INVALID)

      Add an effect and filter type to the speaker. Use :ref:`these constants<aud-sound-effects>` and :ref:`these constants<aud-sound-filter>` for filter.

      .. note::

         For now only one effect per sound is supported.

      :return: None

   .. method:: RemoveEffect()

      Removes active effect.

      :return: None

   *****************
   Reverb Parameters
   *****************

   .. attribute:: reverb_density

      Controls the density of the reverb's late reflections. Higher values ​​result in a denser, more complex reverb sound.

      :default value: 1.0
      :type: float

   .. attribute:: reverb_diffusion

      Affects the propagation of reflected sound. Higher values ​​create a more spread out and distributed reverb sound, while lower values ​​result in more direct and concentrated reflections.

      :default value: 1.0
      :type: float

   .. attribute:: reverb_gain

      Controls the overall volume of the reverb effect.

      :default value: 0.32
      :type: float
   
   .. attribute:: reverb_gain_hf

      Controls the volume of high frequencies in the reverb. Higher values ​​keep more of the high frequencies in the reverb sound, while lower values ​​reduce these frequencies.

      :default value: 0.89
      :type: float

   .. attribute:: reverb_decay_time

      Sets how long it takes for the reverb to fade to silence. Longer Decay Time results in longer reverb.

      :default value: 1.49
      :type: float

   .. attribute:: reverb_decay_hf_ratio

      Controls the decay ratio between high and low frequencies. Higher values ​​mean that high frequencies will decay more slowly compared to low frequencies.

      :default value: 0.83
      :type: float

   .. attribute:: reverb_reflections_gain

      Controls the volume of the initial reverb reflections. These are the first reflections that return to the listener.

      :default value: 0.05
      :type: float

   .. attribute:: reverb_reflections_delay

      Defines the delay time for initial reflections in relation to the original sound.

      :default value: 0.007
      :type: float

   .. attribute:: reverb_late_reverb_delay

      Defines the delay time for late reflections in relation to initial reflections.

      :default value: 0.011
      :type: float

   .. attribute:: reverb_late_reverb_gain

      Controls the volume of late reverb reflections, which are the reflections that arrive after the initial reflections.

      :default value: 1.26
      :type: float

   .. attribute:: reverb_air_absorption_gain_hf

      Controls the amount of sound absorption by high frequencies in the air. This simulates the loss of high frequencies as they propagate through the environment.

      :default value: 0.994
      :type: float

   .. attribute:: reverb_room_rolloff_factor

      Defines how the volume of the sound is reduced with distance in the room, simulating the attenuation of sound as it moves away from the source.

      :default value: 0.0
      :type: float

   .. attribute:: reverb_decay_limit_hf

      Sets the sound attenuation factor in relation to distance.

      :default value: 1
      :type: int

   *****************
   Filter Parameters
   *****************

   .. attribute:: filter_gain

      Sets the overall gain of the filter, applying a uniform reduction in signal volume. A value of 1.0 means no change, while lower values reduce the total volume.
      
      :default value: 1.0
      :type: float

   .. attribute:: filter_gainlf

      Sets the gain applied to low frequencies. In a low-pass filter, this adjusts the intensity of the lowest frequencies. In high-pass and band-pass filters, it controls the reduction of low frequencies.
      
      :default value: 1.0
      :type: float

   .. attribute:: filter_gainhf

      Sets the gain applied to high frequencies. In a high-pass filter, this adjusts the intensity of the highest frequencies. In low-pass and band-pass filters, it controls the reduction of high frequencies.
      
      :default value: 1.0
      :type: float