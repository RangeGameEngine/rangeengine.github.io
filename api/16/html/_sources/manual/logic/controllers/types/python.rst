.. _bpy.types.PythonController:

*****************
Python Controller
*****************

.. seealso::
   See the Python reference of this logic brick in :class:`SCA_PythonController`.

The Python controller runs a Python script when a sensor triggers the controller.
This Python script can interact with the scene or logic bricks through
:doc:`Blender's API </api/bge>`.

A Python script can either run as an entire file or a single module.
A file must be added in the Text editor, and is identified simply by its name, not its path.
Names are case sensitive. Modules are identified by the file name *without* the extension followed by a ``.``
and then the name of the module. For example:

A file ``myscript.py`` contains::

   def myModule ():
      print("Go Open Source!");

The function can be accessed as ``myscript.myModule``, which will run ``print("Go Open Source!");``
every time the controller is triggered.

The entire file can be run by setting the type to *Script* and setting the name to *myscript.py*.


Parts of the Python Controller
==============================

.. figure:: /images/logic-controllers-types-python-node.jpg

   Python Controller.

Type
   Specifies whether it is a module or entire file.
Name
   The name of the file to be loaded.
D (Use Debug)
   Continuously reloads the file.

See :ref:`standard controller parts <standard-controller-parts>` for descriptions of the remaining options.

.. seealso:: For more information on the Python API, see:

   - `The API docs <https://www.blender.org/api/blender_python_api_current/>`__.
   - :doc:`This chapter for more Game Engine related API </api/bge>`.
