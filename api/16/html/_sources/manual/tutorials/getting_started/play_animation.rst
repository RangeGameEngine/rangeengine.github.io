====================
Playing An Animation
====================

In games, animations can be used in many places other than characters - a sliding menu, a 
opening door, coins rotating, etc. In UPBGE, an animation can be played through the use 
of an :ref:`datablock-action`. This tutorial will show you how to play an animation in a 
object and the concept of animation layering, allowing you to play and blend multiple 
animations at once in a single object.

---------------
Before We Start
---------------

Before we start using animations through logic, we need some animations. As we said before, 
UPBGE animations work through the use of :ref:`datablock-action`, so we need to set our 
default **Dope Sheet** editor from *Dope Sheet* mode to *Action Editor* mode. Now, assuming 
you already know how to make simple animations adding keyframes, we'll make two simple 
actions on a cube of a total 50 frames each, with the following settings:

- Rotation action named *rotate*: No rotation at frame 0, 180° at ``Z`` axis on frame
  25, more 180° at ``Z`` axis on frame 50 (that is, a full 360°).

- Scaling action named *scale*: No scale at frame 0, double scale at frame 25 and no
  scale at frame 50 again.

.. figure:: /images/tutorials-play_animation-action_editor.png
   
   *Action Editor* showing each action.

Note the transform channels: *rotate* action only have *Rotation* channels, and *scale* 
action only have *Scaling* channels. This is important to properly blend those actions 
later on, as having the same channels on both (even without an actual transform) may not 
have the expected result in the end.

---------
The Logic
---------

Now, go to the :ref:`editor-logic-bricks` and do the following setup:

- Add two :ref:`sensor-keyboard` through the dropdown menu named **Add Sensor**.
- Add two :ref:`controller-and` through the dropdown menu named **Add Controller**.
- Add two :ref:`actuator-action` through the dropdown menu named **Add Actuator**.
- Connect each brick by dragging and dropping one insert into another.

Now we must fill some fields:

- On the :ref:`sensor-keyboard`, rename both, respectively, to *rotate* and *scale*, and 
  set the field *Key* to, respectively, :kbd:`A` and :kbd:`S`.
- On the :ref:`actuator-action`, rename both, respectively, to *rotate* and *scale*, set 
  the playback type to *Loop Stop*, the value to its respective actions, *End Frame* to 50 
  and *Layer* to, respectively, 0 and 1.

The setup should look somewhat like the figure below:

.. figure:: /images/tutorials-play_animation-logic_editor_1.png
   
   The :ref:`editor-logic-bricks` with the given logic set.

Now, play the game by pressing :kbd:`P` while focusing the *3D Viewport*. When you press 
:kbd:`A` the cube should rotate, and when you press :kbd:`A` the cube should scale. When 
pressing both buttons the cube will rotate and scale at the same time, blending both 
actions. This is only possible due to different animation layers being blended togheter. 
For a matter of testing, set the actuator *scale*'s *Layer* to 0, the same value from the 
actuator *rotate*. When you play the game, you can't play both animations at the same time: 
the last triggered actuator overwrites the currently playing.

----------
Conclusion
----------

This is how you play and blend animations using visual logic in UPBGE. There's more to be 
discovered, like playback modes, blending and more, and this can be learnt from the 
:ref:`actuator-action` page.