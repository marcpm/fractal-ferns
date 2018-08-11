# Fractal Ferns

Barnsley and Cyclosorus Fractal fern building with p5.js

check demo at https://pggmrt.github.io/fractal-ferns/



## Prerequisites

-  Install Node using Homebrew

```
brew install node
```

or download from [Node.js ](https://nodejs.org/)


- (Optional) Install p5-manager for creating future p5.js template files

```
sudo npm install p5-manager -g
```


* Install any local server such as Python's http-server:

```
npm install http-server
```

  or atom live server from the packages installer

  or any other

## Get started

- Clone or download project
- Open project with your preferred text editor.
- Choose **mode 1** or **mode2** in line 81 of the sketch.js file,
- cd to project directory and start a local server.

  i.e.
```
python -m http.server
```
- Go to `localhost:8000` on your browser of choice.

`.atom-live-server.json`  file overrides user's default browser to chrome for atom-live-server auto browser launch.

## Final Ferns


Barnsley Fern   (mode1)          |  Cyclosorus Fern (mode2)
:-------------------------:|:-------------------------:
![Barnsley Fern](/images/Barnsley.png "Barnsley Fern")  |  ![Cyclosorus Fern](/images/Cyclosorus.png "Cyclosorus Fern")



### Math behind

Both fern builts use four affine transformations each with a different probability of being plotted.

An affine transformation is a function between affine spaces which preserves points, straight lines and planes. Also, sets of parallel lines remain parallel after an affine transformation. An affine transformation does not necessarily preserve angles between lines or distances between points, though it does preserve ratios of distances between points lying on a straight line.


## Built With

* [p5.js](https://p5js.org) - JS library based on Processing (Java)
* [Node.js](https://nodejs.org/)
