
*****************
Standalone Player
*****************

The standalone player allows a Blender game to be run without having to load the Blender system.
This allows games to be distributed to other users, without requiring them a detailed knowledge of Blender
(and also without the possibility of unauthorized modification). Note that the Game Engine
*Save as Runtime* is an add-on facility which must be pre-loaded before use.

The following procedure will give a standalone version of a working game.

#. :menuselection:`File --> User Preferences --> Add-ons --> Game Engine --> Save As Game Engine Runtime`
   enable the checkbox. (You can also *Save User Settings*,
   in which case the add-on will always be present whenever Blender is re-loaded).
#. :menuselection:`File --> Export --> Save As Game Engine Runtime`
   (give appropriate directory/filename) confirm with *Save as Game Engine Runtime*.

The game can then be executed by running the appropriate ``.exe`` file.
Note that all appropriate libraries are automatically loaded by the add-on.

If you are interested in licensing your game,
read `Licensing <https://www.blender.org/about/license/>`__
for a discussion of the issues involved.

.. tip:: Exporting...

   If the game is to be exported to other computers,
   make a new empty directory for the game runtime and all its ancillary libraries, etc.
   Then make sure the **whole** directory is transferred to the target computer.
