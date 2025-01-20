.. _editor-logic-components:

################
Components Panel
################

.. figure:: /images/editors-logic-components-panel.png
   
   The Game Components panel.

A Component is a straightforward concept in game development. Essentially, they are modules that can be attached to game objects, and you can assign as many as needed, each fulfilling a unique role. Once a Component is attached, it often comes with adjustable settings that can be modified as per requirements.

A Python component is similar to Python logic bricks with configurable parameters. This component is a script that’s loaded into the UI and defines a component class by inheriting from :class:`KX_PythonComponent`. The class must include a dictionary called **args** to hold its properties and must implement *three* essential functions: **awake()**, **start()** and **update()**.

The script used to define the component needs to have a .py extension. The properties of the component are read from the args attribute when the UI loads. Before scene starts, the **awake()** function is called (more specifically 1 frame before scene really starts). When the game begins, the **start()** function is invoked, receiving a dictionary of property names and values as arguments. The **update()** function is called on every frame, before the logic bricks are executed. Its purpose is to manage and execute all necessary processes.

Component Creation 
==========================

.. figure:: /images/editors-logic-components-panel_addButton.png

In Python Component tab, you will find the **add...** button. It will open the Component Menu.

**Component Menu**

In the Components Menu, you can explore all the files that are in your .range file. To do this, you first need to save your file, and then you'll be able to browse through all the folders containing your game's scripts. Still in the Components Menu, you can create your Component and also reload them using the "reload all scene components" button. Once the desired Component is selected, click the "register" button, and that's it, the Component has been applied to the desired object (remember that the name of the selected object is displayed next to the "reload all scene components" button).

The Components Menu was implemented to offer easy navigation, manipulation, and to make the registration of the component on the desired object more straightforward.

.. figure:: /images/editors-logic-components-panel_add.png

Icons in python components
==========================

Adding icons to components is very simple, at the beginning of args in components add the key "C_Icons" and the value put the name of the icon you want to insert (like: "C_Icons" : "BLENDER") then use "+" to separate one icon from another.

**Example01**

.. code-block:: python

   args = OrderedDict({
   "C_Icons" : "BLENDER+QUESTION"
   })

.. figure:: /images/editors-logic-components-panel_Icons.png

**Example02**

.. code-block:: python

   from Range import *
   from collections import OrderedDict

   class Component(types.KX_PythonComponent):
      # Put your arguments here of the format ("key", default_value).
      # These values are exposed to the UI.
      args = OrderedDict([
      ("C_Icons", "BLENDER+QUESTION"),
      ("Key", "Value")
      ])

      def start(self, args):
         # Put your initialization code here, args stores the values from the UI.
         # self.object is the owner object of this component.
         pass
         

      def update(self):
         # Put your code executed every logic step here.
         # self.object is the owner object of this component.
         pass

.. figure:: /images/editors-logic-components-panel_Icons_02.png

Components Header
===================

You can organize your components with components header.

to use create a key: "C_Header 0" value: "HeaderName".

then, if you want to use more than one header in the component, add +1 to the C_Header, ex: "C_Header 0", "C_Header 1", "C_Header 2".

You can put a custom icon in the Header, just add /iconName in key, ex: ("C_Header 0/IconName", "Value").

.. figure:: /images/editors-logic-components-panel.png

**Component Example**

.. code-block:: python

   from Range import *
   from collections import OrderedDict

   class Component(types.KX_PythonComponent):
      # Put your arguments here of the format ("key", default_value).
      # These values are exposed to the UI.
      args = OrderedDict([
      ("C_Icons", "BLENDER+QUESTION"),
      ("C_Header 0", "Parameters"),
      ("Key", "Value"),
      
      ("C_Header 1/SCRIPTWIN", "Parameters With Icon"),
      ("String", "Value2"),
      ("Bool", False),
      ("List", {"ListValue1", "ListValue2", "ListValue3", "ListValue4"})
      ])

      def start(self, args):
         # Put your initialization code here, args stores the values from the UI.
         # self.object is the owner object of this component.
         pass
         

      def update(self):
         # Put your code executed every logic step here.
         # self.object is the owner object of this component.
         pass

Reordering of components
=========================

.. figure:: /images/editors-logic-components-panel_Reordering.png

You can arrange the order of components in the object, created by @Mysticfall and ported to RanGE.