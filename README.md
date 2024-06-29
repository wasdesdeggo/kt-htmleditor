<h1 align="center">
  Kt html editor
</h1>

 
<hr  style="border-radius: 2%; margin-top: 60px; margin-bottom: 60px;"  noshade=""  size="20"  width="100%">
  
## Installation
```
Once you've downloaded the files extract the folder so it's no longer a .zip file.
```
### 1. Using the html editor
```
Open The kt-htmleditor.exe File
```
### 2. Configurable Options
```
On the left side of the gui there is a 'settings' button, click on that and it will pop up with different contents. If you dont
know what they do click on 'documentation' to see the description of each configurable option.
```
### 3. Editing the html
```
To edit the html you get the website link and put it in the 'edit' tab then paste it in and the html source code will pop up.

You could also write an svg image into the HTML document if you want, SVG images can be written directly into the HTML document
using the <svg> </svg> tag. To do this, open the SVG image in VS code or your preferred IDE, copy the code,
and paste it inside the <body> element in your HTML document. If you did everything correctly, your webpage should be perfectly fine.

If you dont know what your doing then go into 'documentation'
```
<hr  style="border-radius: 2%; margin-top: 60px; margin-bottom: 60px;"  noshade=""  size="20"  width="100%">
  
## Contributing
Contributions are a great way to keep the project active and up to date. Any contributions you make are **greatly appreciated**.

If you have a suggestion that would make this project better, you can simply open a feature request

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/NewFeature`)
3. Commit your Changes (`git commit -m 'Add New Feature'`)
4. Push to the Branch (`git push origin feature/NewFeature`)
5. Open a Pull Request

## VERY IMPORTANT
If you got a false positive, some image or custom data formats can cause false positives because they contain patterns indicating a potential XSS attack in HTML content. For example, an SVG file might contain a <script> tag. If you expect this type of content from legitimate users, narrowly tailor your XSS rules to allow HTML requests that include these other data formats.

## License
Kt-Htmleditor is distributed under the MIT License. See `LICENSE.md` for more information.
