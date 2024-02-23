# `info.json` File Reference

`info.json` is the file that Aioewa uses to know about your addon, like what script files it uses and general information about your addon like name, description and credits for the creators of it. Within it you can also specify DAO settings which 


```admonish error title="Do not use DAO yet!" 
DAO is an new feature which is still in development, therefore use of it is very unstable Recommended to not be used yet. 
```



## `info.json` syntax

Name - Description - Code - Required - Property type

## `AV` 
- It basically specifies the version of the `info.json`. In the future, if the values of `info.jso`n will be changed and it could possibly break the addon if it uses old values, Aioewa can check if you use up-to-date `info.json`
specification using `AV`.
- Example: `"AV": "1"`
- Required? ✅ 
- Property Type: `string`

## `name` 
- Name of your feature, will be used in the features list. 
- Example: `"name": "Test Feature"` 
- Required? ❌, but strongly recommended 
- Property Type:`string`-

## `description` 
- Shows the description of the feature 
- Example `"description": "This is my test feature" `
- Required? ❌, but strongly recommended
- Property Type: `string`

## `tags` 
- Relevant tags to the addon, could be
- Example: `"Tags": ["community", "testing"]`
- Required? ❌
- Property Type: `string[]`

<!-- 
## `` 
- description here please.
- Example: `"bla bla": "æøå"`
- Required? ✅ maybe?
- Property Type: `string`
-->
