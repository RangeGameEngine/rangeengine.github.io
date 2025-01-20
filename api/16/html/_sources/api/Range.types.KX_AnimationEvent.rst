KX_AnimationEvent()
========================================

.. class:: KX_AnimationEvent()

   The `KX_AnimationEvent` class is used to handle events based on animations, allowing the definition and manipulation of events during the playback of animations.

   .. attribute:: name

      :return: "KX_AnimationEvent"
      :type: str()

   .. attribute:: triggers

      Return a list of trigger indices assiciated with the animation event.

      :return: Trigger index
      :type: list[int]

   Animation Event Method Example:

   First of all, the Animation Event should be a global function that receives 2 parameters:

   :arg object: The object on which the animation events are.
   :type object: string
   :arg arg: Your custom triggers.
   :type arg: string

   **Example 01:**

   .. figure:: /images/AnimationEventsEX_01.png

   .. code-block:: python

      from Range import *
      from collections import OrderedDict

      def AnimationEvents(object, arg):

         match arg:
            case "Trigger01" | "Trigger02":
               print("Do Something")

      class PlayerComponent(types.KX_PythonComponent):
         ...

   .. figure:: /images/AnimationEventsEX_01_DebugInformation.png

   **Example 02:**

   if you want to get values from your player capsule:

   .. figure:: /images/AnimationEventsEX_02_PropertysFromPlayerCapsule.png

   .. code-block:: python

      from Range import *
      from collections import OrderedDict

      def AnimationEvents(object, arg):

         player = object.parentRecursive[0]

         match arg:

            case "Trigger01":
               print("Life: ", player["Life"])

            case"Trigger02":
               print("Stamina: ", player["Stamina"])

      class PlayerComponent(types.KX_PythonComponent):
         ...

   .. figure:: /images/AnimationEventsEX_02_DebugInformation.png

   **WARNING:** If your scripts are in another folder at the root of the project, remember to reference it in the `Python event`. Like this:

   .. figure:: /images/AnimationEvents_FileReference.png

   