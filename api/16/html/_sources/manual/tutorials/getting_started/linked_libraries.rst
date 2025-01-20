==============================
Using Linked Libraries In Game
==============================

*Linked Library* is a Blender feature that allows referencing a datablock from another 
blend file into the current one, allowing easier manipulation of common assets and better 
project management, as you only need to edit the original file to update all the 
references. UPBGE supports this Blender feature, specially group instances, which ones 
are fairly well integrated through Python. This tutorial aims to show how to use linked 
libraries, group instances and manage the links.

---------------
Before We Start
---------------

To proceed with this tutorial, we need some base files first. On a directory, save three 
empty blend files: *game.blend* (which will contain the references from the libraries), 
*lib_character.blend* (which will contain the actual model of our character) and 
*lib_scenery.blend* (which will contain the actual model of our ground). We'll edit the 
file *game.blend* later, first we must create the contents of our libraries. 

lib_character.blend
   Add an Monkey object, add it to a group (:kbd:`Ctrl-G`) and rename the group to `player`.

lib_scenery.blend
   Add an Plane, scale it by 5 (so it have the size of 10x10), add it to a group 
   (:kbd:`Ctrl-G`) and rename the group to `ground`.

Both files should be set up somewhat like this:

.. figure:: /images/tutorials-linked_libraries-base_files_1.png
   
   Split view of the two files.

------------------
Linking The Groups
------------------

Now, we'll create a blend file named *game.blend* on the same directory as our previous 
files. In this file, we'll do the following procedures:

- Go to the *File* menu, click the option *Link*.
- Select the either *lib_character.blend* or *lib_scenery.blend*.
- Select the option *Group*.
- Select the corresponding group and double click it / click *Link from Library*.

.. figure:: /images/tutorials-linked_libraries-linking_1.png
   
   Linking procedures diagram.
   
If everything went right, you should see in the *3D Viewport* the group instances added. 
They are not editable as they are only :ref:`datablock-empty` objects referencing groups 
from the original files.

.. figure:: /images/tutorials-linked_libraries-linking_2.png
   
   Groups instanced on game.blend scene.

With the instances added, all you have to do is place them with the desired 
transformations, and if you need to edit all the placed instances, just edit the original 
file to update all the references. Pretty handy, isn't it?

------------------
Managing the Links
------------------

If you rename or move any of your libraries to another folder, you will face a common 
problem: broken links. There are several ways to deal with this problem, and this section 
will present you the use of the *Outliner* to manage links (and :ref:`datablock-index`).

I have renamed the library files to `LibCharacter` and `LibScenery`, which are different 
names from the previous ones (with underlines and only lower case characters). When opening 
`game.blend`, the editor will complain about the non existing libraries, and our instances 
will be shown only as :ref:`datablock-empty` objects.

.. figure:: /images/tutorials-linked_libraries-managing_1.png
   
   Main file after libraries be renamed.

To fix this, we must go to the *Outliner* and select the *Blend File* mode. On this mode 
we'll see all :ref:`datablock-index`s on our blend file.

.. figure:: /images/tutorials-linked_libraries-managing_2.png
   
   *Blend File* mode on the *Outliner*.

The important elements here are the references to our libraries at the bottom: they are 
being shown as cracked icons and their previous names. We have two choices to fix this issue:

Renaming the references
   You only need to double click the references and provide the new names. If they are in another folder, you must provide the relative path.
   
Relocating the references
   You only need to right click the references, select *Relocate* and select the corresponding file.
   
.. figure:: /images/tutorials-linked_libraries-managing_3.png
   
   Broken references fix modes on the *Outliner*.

After fixing the broken references, their icons will change back to normal and the objects 
will be automatically updated in the *3D Viewport*.
   
.. figure:: /images/tutorials-linked_libraries-managing_4.png
   
   Fixed references and objects updated on the *3D Viewport*.

Understanding how to use and manage linked libraries is important to maintain a complex and 
healthy project environment. Much more can be achieved through the use of :class:`bge.logic.LibLoad`, 
loading and unloading libraries dynamically using Python, but for simpler projects, linked 
libraries should do the job.