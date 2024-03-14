# Adding some code!

Now as our addon is purely CSS code, we probably need to add some actually Javascript code. 

In your info.json you can specify `onTab` script which will be runned by the addon on every tab you have it. 
Info.json provides a lot of other settings, on of them is `IF_onTab`, which checks **if** it is meeting specific requirements which are specified by a Javascript script. You can for instance check if the website's domain is the one you want the addon to run on, or else. `onTab` can run perfectly fine without the `IF_` setting, but with it you can check whether the addon can run in that tab or no. Let's do something like this. 