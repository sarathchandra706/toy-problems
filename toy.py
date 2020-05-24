class toy:
   def __init__(self,capacity):
      self.capacity = capacity
      self.count = {}
      self.files = {}

   def put(self,key,v):
        if(key not in self.files and len(self.files)==self.capacity):
                recent=min(self.count.keys(),key=lambda k:self.count[k])
                self.files.pop(recent)
                self.count.pop(recent)
                self.files[key] = v
        else:
             if(key not in self.files):
                self.files[key]=v
                self.count[key]=1
        return "done"        
   
   def get(self,key):
        if(key in self.files):
               self.count[key] +=1
               return self.files[key]
        else:
               print("no such file")
    
   def get_cache(self):
        return self.files

obj = toy(3)
assert obj.put(1,"page1")=="done"
assert obj.put(2,"page2")=="done"
assert obj.get(1)=="page1"
assert obj.get(1)=="page1"
assert obj.put(3,"page3")=="done"
assert obj.put(4,"page4")=="done"
assert obj.get_cache()== {1:'page1',3:'page3',4:'page4'}
print ("All test cases are succesfully passed")

