.. _bpy.types.SceneActuator:

**************
Scene Actuator
**************

.. seealso::
   See the Python reference of this logic brick in :class:`KX_SceneActuator`.

The *Scene Actuator* manages the scenes in the user's blend-file,
these can be used as levels or for UI and background.

.. figure:: /images/logic-actuators-types-scene-node.png
   :width: 257px

   Scene actuator.


Properties
==========

The actuator has several modes described below:

Restart
   Restarts the current scene, everything in the scene is reset.
Set Scene
   Changes scene to selected one.
Set Camera
   Changes which camera is used.
Add Overlay Scene
   This adds an other scene, and draws it on top of the current scene.
   It is good for interfacing: keeping the health bar, ammo meter,
   speed meter in an overlay scene makes them always visible.
Add Background Scene
   This is the opposite of an overlay scene, it is drawn behind the current scene.
Remove Scene
   Removes a scene.
Suspend Scene
   Pauses a scene.
Resume Scene
   Resumes a paused scene.

.. note::

   A scene that it is paused cannot resume itself.
   You need an active scene to resume other scene that it is paused.


Example
=======
