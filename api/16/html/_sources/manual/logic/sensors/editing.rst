
**************
Sensor Editing
**************

.. figure:: /images/logic-sensors-editing-column.jpg
   :width: 292px

   Sensor Column with a typical sensor.

Blender sensors can be set up and edited in the left-hand column of the Logic Panel.
This page describes the general column controls,
and also those parameters which are common to all individual sensor types.

The image shows a typical sensor column with a single example sensor.
At the top of this column, the column heading includes menus and buttons to control which of
all the sensors in the current Game Logic are displayed.


Column Heading
==============

.. figure:: /images/logic-sensors-editing-column1.png
   :width: 292px

   Sensor Column heading.

The column headings contain controls to set which sensors, and the level of detail given,
in the sensor column. This is very useful for hiding unnecessary sensors so that the necessary
ones are visible and easier to reach. Both these can be controlled individually.


Sensors
=======

Show Objects
   Expands all objects.
Hide Objects
   Collapses all objects to just a bar with their name.
Show Sensors
   Expands all sensors.
Hide Sensors
   Collapses all sensors to bars with their names.

It is also possible to filter which sensors are viewed using the four heading buttons:

Sel
   Shows all sensors for selected objects.
Act
   Shows only sensors belonging to the active object.
Link
   Shows sensors which have a link to a controller.
State
   Only sensors connected to a controller with active states are shown.


Object Heading
==============

.. figure:: /images/logic-sensors-editing-column2.png
   :width: 292px

   Sensor Object Heading.

In the column list, sensors are grouped by object. By default,
sensors for every selected object appear in the list,
but this may be modified by the column heading filters.

At the head of each displayed object sensor list, two entries appear:

Name
   The name of the object.
Add Sensor
   When clicked, a menu appears with the available sensor types.
   Selecting an entry adds a new sensor to the object.
   See :doc:`Sensors </manual/logic/sensors/index>` for a list of available sensor types.
