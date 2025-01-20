.. _logic-properties:

==========
Properties
==========

Properties are the game logic equivalent to variables. They are stored with the object,
and can be used to represent things about them such as ammo, health, name, and so on.


.. _game-engine-property-types:

.. _logic-properties-types:

--------------
Property Types
--------------

There are five types of properties:

Timer
   Starts at the property value and counts upwards as long as the object exists.
   It can for example be used if you want to know how long time it takes the player to complete a level.
Float
   Uses decimal numbers as values, can range from -10000.000 to 10000.000. It is useful for precision values.
Integer
   Uses integers (whole numbers) as values, between -10000 and 10000.
   Useful for counting things such as ammunition, where decimals are unnecessary.
String
   Takes text as value. Can store 128 characters.
Boolean
   Boolean variable, has two values: true or false.
   This is useful for things that have only two modes, like a light switch.

----------------
Using Properties
----------------

When a game is running, values of properties are set, manipulated, and evaluated using
the :doc:`Property Sensor </manual/logic/sensors/types/property>` and
the :doc:`Property Actuator </manual/logic/actuators/types/property>`.

Logic Properties are created and edited using the panel on the left of the Logic Editor panel.
The top menu provides a list of the available property types.

.. figure:: /images/editors-logic-logic_properties-panel.png

   Properties Panel of the Logic Editor.

Add Game Property button
   This button adds a new property to the list, default is a *Float* property named ``prop``,
   followed by a number if there already is one with this name.

Name field
   Where you give your property its name, this is how you are going to access it through Python or expressions.
   The way to do so in Python is by dictionary style look-up (``GameObject["propname"]``).
   The name is case sensitive.

Type menu
   This menu determines which type of property it is. The available options are in `Property Types`_.
Value field
   Sets the initial value of the property.

Information (*i* button)
   Display property value in debug information. If debugging is turned on,
   the value of the property is given in the top left-hand corner of the screen while the game is running.
   To turn debugging on, tick the *Show Debug Properties* checkbox in the *Game* menu.
   All properties with debugging activated will then be presented with their object name,
   property name and value during gameplay.
   This is useful if you suspect something with your properties is causing problems.
