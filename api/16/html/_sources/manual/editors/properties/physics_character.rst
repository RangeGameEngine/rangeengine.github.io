
*****************
Character Physics
*****************

The character physics type is used for player-controlled characters,
for which the other physics types often result unexpected results
(bouncing off walls, sliding, etc.) and for which simple kinematics offer much more precision.


Properties
==========

Step Height
   The maximum height of steps the character can run over.
Jump Force
   Upward velocity applied to character when jumping.
Fall Speed Max
   Maximum speed at which the character will fall.
Max Jumps
   Maximum number of jumps the character can make before it hits the ground.

.. note::

   Obstacle traversal (e.g. step climbing) is governed by (in order of importance):

   - The velocity of the character object
   - The shape and margin of the collision bounds (character and obstacle)
   - The *Step Height* parameter
   - The leading slope of the obstacle

   Character fall speed is governed by (in order of importance):

   - The *Fall Speed Max* parameter
   - The *Step Height* parameter (more *Step Height* -> more fall speed)


Example
=======
