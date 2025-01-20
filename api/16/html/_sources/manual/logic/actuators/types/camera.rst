.. _bpy.types.CameraActuator:

***************
Camera Actuator
***************

.. seealso::
   See the Python reference of this logic brick in :class:`KX_CameraActuator`.

The *Camera Actuator* makes the camera follow or track an object.

.. figure:: /images/logic-actuators-types-camera-node.png
   :width: 271px

   Camera Actuator.


Properties
==========

Camera Object
   Name of the Game Object that the camera follows/tracks.
Height
   Height the camera tries to stay above the Game Object's object center.
Axis
   Axis in which the Camera follows (X or Y).
Min
   Minimum distance for the camera to follow the Game Object.
Max
   Maximum distance for the camera to follow the Game Object.
Damping
   Strength of the constraint that drives the camera behind the target.
   The higher the parameter,
   the quicker the camera will adjust to be inside the constrained range (of min, max and height).


Example
=======
