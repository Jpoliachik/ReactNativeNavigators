package com.reactnativenavigationsample;

import com.facebook.react.BuildConfig;
import com.facebook.react.ReactPackage;
import com.facebook.soloader.SoLoader;
import com.reactnativenavigation.NavigationApplication;

import java.util.List;


public class MainApplication extends NavigationApplication {

  @Override
  public boolean isDebug() {
     // Make sure you are using BuildConfig from your own application
     return true;
  }

  @Override
  public List<ReactPackage> createAdditionalReactPackages() {
     // Add the packages you require here.
     // No need to add RnnPackage and MainReactPackage
     return null;
  }

  // private final ReactNativeHost mReactNativeHost = new ReactNativeHost(this) {
  //   @Override
  //   public boolean getUseDeveloperSupport() {
  //     return BuildConfig.DEBUG;
  //   }

  //   @Override
  //   protected List<ReactPackage> getPackages() {
  //     return Arrays.<ReactPackage>asList(
  //         new MainReactPackage()
  //     );
  //   }
  // };

  // @Override
  // public ReactNativeHost getReactNativeHost() {
  //   return mReactNativeHost;
  // }

   @Override
   public void onCreate() {
     super.onCreate();
     SoLoader.init(this, /* native exopackage */ false);
   }
}
