# 1.0迁移到2.0指引

## weex工程

用2.0的`package.json`替换1.0

## iOS工程

升级pod
```ruby
pod 'WeexBox', '~> 2.0'
```

## Android工程

升级dependencies
```groovy
dependencies {
    api 'com.github.aygtech:weexbox-android-library:2.1.40'
}
```

