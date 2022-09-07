# Don't forget that if you delete an application, you need to then also manually delete all the offers associated with it. The model structure doesn't care of this for you like it does the other logic around deleted db entries. 
from django.shortcuts import render

def frontend(request):
    context = { }
    return render(request, "index.html", context)