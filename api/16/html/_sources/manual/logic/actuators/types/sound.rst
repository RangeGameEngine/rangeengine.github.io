.. _bpy.types.SoundActuator:

**************
Sound Actuator
**************

.. seealso::
   See the Python reference of this logic brick in :class:`KX_SoundActuator`.

The *Sound Actuator* allows the user to play sound files in the game engine.

.. figure:: /images/logic-actuators-types-sound-node.png

   Sound Actuator.


Properties
==========

Sound File
   Load a new sound file or select one from the list.
Play Mode
   How the sound effect is played.

   Play Stop
      The sound effect is played when activated. Stops instantly when deactivated.
   Play End
      The sound effect is played when activated. When deactivated, stops after finishing playing the sound.
      The sound is not replayed if activated while still playing.
   Loop Stop
      The sound is played as infinite loop when activated. Stops instantly when deactivated.
   Loop End
      The sound is played as infinite loop when activated.
      When deactivated, stops after finishing playing the sound.
   Loop Bidirectional
      The sound is played as infinite ping-pong loop. When deactivated, stops after finishing playing the sound.
   Loop Bidirectional Stop
      The sound is played as infinite ping-pong loop. Stops instantly when deactivated.
Volume
   The volume at which the sound effect is played.
Pitch
   The pitch at which the sound effect is played. 0 is default, 12 is one octave.


3D Sound
--------

.. figure:: /images/logic-actuators-types-sound-cone.jpg
   :width: 200px
   :figwidth: 200px

   The cones point in the direction of the objects negative Z axis.

If enabled, the sound is affected by distance, speed of the emitting object and various other things.
The options below are only available if 3d Sound is enabled.

.. note::

   3D sound is influenced by the Audio panel in Scene Settings.
   A brief description of the different distance models can be found
   `here <https://www.openal.org/documentation/openal-1.1-specification.pdf>`__.

Minimum Gain
   The minimum gain of the sound, no matter how far it is away.
Maximum Gain
   The maximum gain of the sound, no matter how near it is.
Reference Distance
   The cones point in the direction of the objects negative Z axis.
   The distance at which the sound has a gain of 1.0.
Maximum Distance
   The maximum distance at which the sound can be heard.
Rolloff
   The influence factor on volume depending on distance.
   The higher, the more the sound will fade with distance.
Cone Outer Gain
   The gain outside the outer cone. The gain inside the outer cone will be interpolated
   between this value and the normal gain inside the inner cone (Volume).
   Note that the cones always point in the direction of the objects local -Z axis (figure right).
Cone Outer Angle
   The angle of the outer cone.
Cone Inner Angle
   The angle of the inner cone.


Example
=======
