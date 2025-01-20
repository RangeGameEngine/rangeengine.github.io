KX_MeshBuilder(KX_MeshBuilder)
==============================

base class --- :class:`KX_MeshBuilder`

.. class:: KX_MeshBuilder(KX_MeshBuilder)

   :class:`KX_MeshBuilder` allows you to create meshes in real time.

   .. code-block:: python

      from Range import *
      from collections import OrderedDict
      import random

      class MeshBuilder_Example(types.KX_PythonComponent):
         # Put your arguments here of the format ("key", default_value).
         # These values are exposed to the UI.
         args = OrderedDict({})
         
         def awake(self, args):
            ...

         def start(self, args):
            self.scene = logic.getCurrentScene() # CurrentScene(Scene)
            self.keyboard = logic.keyboard.inputs # Keyboard Inputs
            
            self.mesh = None
            self.slot = None
            
            self.reGenerate()
            
         def reGenerate(self):
            # If a KX_MeshBuilder was generated, we release it before generating a new one.
            if (self.mesh):
                  del self.mesh
                  del self.slot
                  
            # Create a KX_MeshBuilder.
            self.mesh = types.KX_MeshBuilder("Triangle", self.scene, uvs=["UV"])
            self.slot = self.mesh.addSlot(self.object.meshes[0].materials[0], 0)
            
            # Add Vertices Position.
            self.slot.addVertex((-1 + random.random(), 0, 1), normal=(0, 0, 1))
            self.slot.addVertex((1  + random.random(), 0, 1), normal=(0, 0, 1))
            self.slot.addVertex((0, 1, 1), normal=(0, 0, 1))
            
            # Add Index from a triangle, you don't necessarily need to use "addPrimitiveIndex" or "addTriangleIndex", addIndex does both simultaneously.
            self.slot.addIndex((0, 1, 2))
                  
            # Finalize the mesh here and you will receive a new KX_Mesh to use on any object.
            me = self.mesh.finish()
            
            # Destroy the previous mesh, this is important if you do not want to use it anymore, if you do not destroy the previous mesh that should be unused, consider this a memory leak.
            self.object.meshes[0].destruct()
            
            # Update the graphic mesh.
            self.object.replaceMesh(me, 1, 0)
            
            # Update the physical mesh.
            self.object.reinstancePhysicsMesh(dupli=False)
            
         def update(self):
            # Every time you press space, we will generate a new mesh with a different vertex position.
            if (self.keyboard[events.SPACEKEY].released):
                  self.reGenerate()

   .. attribute:: slots

      Get the list of KX_MeshBuilderSlots added.

      :type: list of :class:`KX_MeshBuilderSlot`

   .. method:: addSlot(material, primitive)

      Add a :class:`KX_MeshBuilderSlot` to this KX_MeshBuilder.

      :arg material: Object material
      :type material: :class:`KX_Material`
      :arg primitive: The primitive draw type for this Slot, 0 = TRIANGLES, 1 = POINTS, 2 = LINES
      :type primitive: int

   .. method:: finish()

      Finalize it and convert it to :class:`KX_Mesh` and it becomes usable for :class:`KX_GameObject`'s.

      :return: A KX_Mesh.
      :rtype: :class:`KX_Mesh`

   .. method:: FromMesh(mesh, name)

      Create a KX_MeshBuilder from a mesh of an object.

      :arg mesh: Object mesh
      :type mesh: :class:`KX_Mesh`
      :arg name: The new KX_MeshBuilder name.
      :type name: string
