
****************
Actuator Editing
****************

.. figure:: /images/logic-actuators-editing-column.png

   Actuator Column with a typical actuator.

Blender actuators can be set up and edited in the right-hand column of the Logic Panel.
This page describes the general column controls,
and also those parameters which are common to all individual actuator types.

The image shows a typical actuator column with a single example actuator.
At the top of this column, the column heading includes menus and buttons to control which of
all the actuators in the current Game Logic are displayed.


Column Heading
==============

.. figure:: /images/logic-actuators-editing-column1.png

   Actuator Column heading.

The column headings contain controls to set which actuators, and
the level of detail given, in the actuator column.
This is very useful for hiding unnecessary actuators,
so that the necessary ones are visible and easier to reach.
Both these can be controlled individually.


.. rubric:: Actuators

Show Objects
   Expands all objects.
Hide Objects
   Collapses all objects to just a bar with their name.
Show Actuators
   Expands all actuators.
Hide Actuators
   Collapses all actuators to bars with their names.

It is also possible to filter which actuators are viewed using the four heading buttons:

Sel
   Shows all actuators for selected objects.
Act
   Shows only actuators belonging to the active object.
Link
   Shows actuators which have a link to a controller.
State
   Only actuators connected to a controller with active states are shown.


Object Heading
==============

.. figure:: /images/logic-actuators-editing-column2.png

   Actuator Object heading.

In the column list, actuators are grouped by object. By default,
actuators for every selected object appear in the list,
but this may be modified by the column heading filters.

At the head of each displayed object sensor list, two entries appear:

Name
   The name of the object.
Add
   When clicked, a menu appears with the available actuator types.
   Selecting an entry adds a new actuator to the object.
   See :doc:`Actuators <./index>` for list of available actuator types.
