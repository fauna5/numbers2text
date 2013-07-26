Terminal Node app that converts Number() input to english text

```
~/dev/node/test$ node numbers2text.js 
Enter a positive integer less than a billion and hit enter. Empty input exits the program.
> 12
twelve
> 123
one hundred and twenty three
> 12341232
twelve million three hundred and forty one thousand two hundred and thirty two
> string
Must be a positive integer less than a billion
> -5
Must be a positive integer less than a billion
> 3.1415
Must be a positive integer less than a billion
>   
Bye
```