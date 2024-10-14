# setup homebrew

https://brew.sh/

/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"

Next steps:
- Run these commands in your terminal to add Homebrew to your PATH:

brew --version

# setup nvm

brew install nvm

nvm -v

vi ~/.zshenv

i

export NVM_DIR="$HOME/.nvm"
[ -s "/opt/homebrew/opt/nvm/nvm.sh" ] && \. "/opt/homebrew/opt/nvm/nvm.sh"
[ -s "/opt/homebrew/opt/nvm/etc/bash_completion.d/nvm" ] && \. "/opt/homebrew/opt/nvm/etc/bash_completion.d/nvm"

esc

:wq

source ~/.zshenv 

nvm -v

# setup node (node, npm)

nvm install --lts

# setup pnpm

npm install -g pnpm

# setup Xcode

https://developer.apple.com/xcode/resources/

sudo xcodebuild -license

# setup rust

curl --proto '=https' --tlsv1.2 https://sh.rustup.rs -sSf | sh

# setup andoid

## install Andrid
https://developer.android.com/studio?hl=ko


## Set the JAVA_HOME environment variable

java -version

cd ~/

vi .bash_profile

i

export JAVA_HOME="/Applications/Android Studio.app/Contents/jbr/Contents/Home"

esc

:wq

source .bash_profile

echo $JAVA_HOME

## Use the SDK Manager in Android Studio to install the following:

Android SDK Platform
Android SDK Platform-Tools
NDK (Side by side)
Android SDK Build-Tools
Android SDK Command-line Tools

## Set ANDROID_HOME and NDK_HOME environment variables

vi .bash_profile

i

export ANDROID_HOME="$HOME/Library/Android/sdk"
export NDK_HOME="$ANDROID_HOME/ndk/$(ls -1 $ANDROID_HOME/ndk)"

esc

:wq

source .bash_profile

# setup ios

rustup target add aarch64-apple-ios x86_64-apple-ios aarch64-apple-ios-sim

brew install cocoapods