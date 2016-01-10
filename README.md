# FADBUS, the FontAwesome DataBase Filter

## Purpose
I can't ever seem to find the right icon to fit my application needs, so I've dumped all the Font Awesome icons into a filterable table.

## Installation

### Setup Jekyll
FADBUS is a [Jekyll][1] application for now, so you need to get Jekyll installed on your system.  Jekyll is a ruby application and installs with gem.  Follow the [Jekyll installation documentation][2].

### Install FADBUS
#### Step 1: Get the FADBUS Application

FADBUS needs to be downloaded from the Github repository, do so using the typical methods of cloning or downloading the application [zip file][3].

##### Clone method

    $ git clone https://github.com/fadbus/fadbus.github.io.git

#### Step 2: Run Jekyll

##### Navigate inside the FADBUS directory

    $ cd /fadbus.github.io

##### Run Server

     $ jekyll serve

##### Test in Browser

[http://localhost:4000/][4]


  [1]: http://jekyllrb.com/
  [2]: http://jekyllrb.com/docs/installation/
  [3]: https://github.com/fadbus/fadbus.github.io/archive/master.zip
  [4]: http://localhost:4000/

#### Additional Commands

##### Compile sass to css
    $ sass assets/scss/custom.scss:assets/css/custom.min.css --style compressed

##### Update assets
    $ bower install
