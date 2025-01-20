======================
Exporting your Project
======================

This tutorial will show you how to export properly a project using Range Armor,
Be sure to follow all the steps to prevent fails and errors.

---------------
Setup The Scene
---------------

Setup the project to the right scene and camera, the standalone will start from the scene
and camera that your project is.

.. figure:: /manual/tutorials/range_armor/img/setupscene.png

-----------------------------------------------
Saving the file as Range Protected File (RASEC)
-----------------------------------------------

RASEC is the new file security system to Range Armor (Range Engine 1.4+)

After the scene is setup, you need the save your file as a .rasec

.. figure:: /manual/tutorials/range_armor/img/rasec.png

.. figure:: /manual/tutorials/range_armor/img/saverasec.png

.. tip::

   To organize better your project make a new folder and save the .rasec

-----------------
Setup Range Armor
-----------------

Creating a new Project
----------------------

Now you need to open Range Armor, you can find it in **File** or **Info** tab

.. figure:: /manual/tutorials/range_armor/img/openrarmor.png

Now you need to create a **New Project**

.. figure:: /manual/tutorials/range_armor/img/newproject.png

.. figure:: /manual/tutorials/range_armor/img/creatingproject.png

   Create a name to your project folder and click **OK**

.. tip::

   Create the project inside the folder you made to the .rasec file

.. warning::

   Don't try to create the project inside **Program Files** folder, otherwise it will fail

Copying Engine Files
--------------------

Range Armor needs the engine files to make the exporting process possible, now you can copy the files of your current engine release
with just one click, you just need to click in **Copy Range Engine Files**

.. figure:: /manual/tutorials/range_armor/img/copyenginefiles.png

.. warning::

   If you want to export to more systems you must to copy the files from each version manually as said in :ref:`Engine Folder<tutorials-range_armor-exporting_your_project-engine-folder>`

----------------------------------
Importing Project and Engine Files
----------------------------------

Range Armor require some files inside the new project folder you create, as your project file,
icons and some engine files from other releases if you want to export for more systems.

When you create a Range Armor project, a folder is created with 4 folders in

.. figure:: /manual/tutorials/range_armor/img/folders.png

The folders is:
   - **Data** (Your Project)
   - **Engine** (Engine files)
   - **Icons** (Custom Icons)
   - **Launcher** (Range Armor Files)

Data Folder
-----------

First of all, move your project .rasec to the **Data** folder and delete the **Example Game.range**

.. figure:: /manual/tutorials/range_armor/img/dataproject.png

.. _tutorials-range_armor-exporting_your_project-engine-folder:
Engine Folder **(Optional)**
----------------------------

Now you need to move some files from the Range Engine release version to the **Engine** folder

In this example the project will be exported to Windows x64, so you need to copy some Range Engine
Windows x64 files to the **Engine/Windows64** folder

.. figure:: /manual/tutorials/range_armor/img/enginefiles.png

Icons Folder
------------

In this folder you can set custom icons to your project executable file, you just got to replace
the stardard icons in the folder for your custom icons with the same name as the default icons

.. figure:: /manual/tutorials/range_armor/img/customicons.png

-----------------
Setup The Project
-----------------

Now in the **Project** panel in Range Armor

You need to change:
   - The project/launcher name
   - The version of the project
   - .rasec file path (**data** folder)

.. figure:: /manual/tutorials/range_armor/img/setupproject.png

---------
Exporting
---------

Finally you just have to choose the platform you want to export your project

.. tip::

   If you want export to more platforms at the same time just choose **All Platforms**

.. figure:: /manual/tutorials/range_armor/img/exporting.png

Then you just need to set the icons of launcher

.. figure:: /manual/tutorials/range_armor/img/builddata.png

When the export gets finished you can find you project in the **Release** folder

.. figure:: /manual/tutorials/range_armor/img/releasefolder.png


----------
Conclusion
----------

Now your project is properly exported, you already can publish your game in online platforms 
without problems with security and licensing!

.. figure:: /manual/tutorials/range_armor/img/rangearmorexample.gif

Learn more about Range Armor licensing:
   `Licensing of Games <../../release/licensing.html>`__