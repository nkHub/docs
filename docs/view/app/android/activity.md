# Activity

##### 1.创建活动

清单文件manifest.xml的application节点下添加activity节点，创建layout界面

```
  //清单文件manifest.xml
  <activity
    android:name=".module.second.second"
    android:label="活动"> //toolbar页面标题
    <intent-filter> //意图过滤
      <action android:name="com.test.activitytest.ACTION_START" /> //action
      <category android:name="android.intent.category.DEFAULT" />
    </intent-filter>
  </activity>
  ...
  //方式一（常用）
  Intent intent = new Intent(context,class);
  //方式二
  Intent intent = new Intent(action);
  //action来源于manifest.xml清单文件下的activity节点的action参数
  intent.putExtra(key,value);//携带参数，value包含多种类型
  startActivity(intent);
  ...
  //期待返回值
  startActivityForResult(intent,requestCode);
  //上个活动返回值
  protected void onActivityResult(int requestCode,int resultCode,Intent data){
    switch(requestCode){
      case 1:
        if(resultCode == RESULT_OK){
          String returnedData = data.getStringExtra(name);
        }
      break;
      default:
    }
  }

  //关闭活动
  activity.finish();


```

##### 2.生命周期

```
  public class MainAcivity extends BaseActivity{
    //首次创建
    @Override
    protected void onCreate(Bundle savedInstanceState) {
      super.onCreate(savedInstanceState);
      setContentView(resourceId); //设置界面资源
    }
    //活动销毁后重新创建
    @Override
    protected void onRestart() {
      super.onRestart();
    }
    //开始可见
    @Override
    protected void onStart() {
      super.onStart();
    }
    //活动可见
    @Override
    protected void onResume() {
      super.onResume();
    }
    //活动保留不可见
    @Override
    protected void onPause() {
      super.onPause();
    }
    //活动关闭
    @Override
    protected void onStop() {
      super.onStop();
    }
    //活动销毁
    @Override
    protected void onDestroy() {
      super.onDestroy();
    }
  }
```
