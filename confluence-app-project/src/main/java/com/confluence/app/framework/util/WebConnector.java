package com.confluence.app.framework.util;

import java.io.FileInputStream;
import java.util.Properties;
import java.util.concurrent.TimeUnit;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.firefox.FirefoxDriver;



public class WebConnector {
	
	
  static WebConnector web=null;	
  Properties OR=null;	
  Properties config=null;
  
  WebDriver driver=null;
  WebDriver mozilla=null;
  WebDriver chrome=null;
  WebDriver iE=null;

  
  
	
//selenium layer
//intialize properties file
	
  private WebConnector(){
	  if(OR==null){
	  try{
		 
		  OR=new Properties();
		  FileInputStream fs=new FileInputStream(System.getProperty("user.dir")+"\\src\\main\\java\\com\\confluence\\app\\frameowork\\config\\OR.properties");
		  OR.load(fs);
	      config=new Properties();
		  fs=new FileInputStream(System.getProperty("user.dir")+"\\src\\main\\java\\com\\confluence\\app\\frameowork\\config\\"+OR.getProperty("testEnv")+"_config.properties");
		  config.load(fs); 
		  
		  //System.out.println(OR.getProperty("loginUsername"));
		  //System.out.println(config.getProperty("LoginURL"));
		  }
		  
		  
		  
		  
	  catch(Exception e){
		  System.out.println("Error in intializing proerties files"+e.getMessage());
	  }
	  
     }
  }	  
  
  
  
 //*************************************************************************Application independent functions************************************************************** 
  
  
  //open the browser	
  public void OpenBrowser(String browserType){
	  if(browserType.equals("Mozilla")&& mozilla==null){
		  driver=new FirefoxDriver();
		  mozilla=driver;
	   }else if(browserType.equals("Mozilla")&& mozilla!=null){
		  driver=mozilla; 
	   }
	   else if(browserType.equals("Chrome")&&chrome==null){
		  System.setProperty("webdriver.chrome.driver", System.getProperty("user.dir")+"\\chrome\\chromedriver.exe.");
		  driver=new ChromeDriver();
		  chrome=driver;
	  }else if(browserType.equals("Chrome")&&chrome!=null){
		  driver=chrome;
	  }else if(browserType.equals("IE")&& iE==null){
		  // initialize internet explorer driver
		  iE=driver;
	  }else if(browserType.equals("IE")&& iE!=null){
		  driver=iE;
	  }
	  
	  driver.manage().window().maximize();
	  driver.manage().timeouts().implicitlyWait(20, TimeUnit.SECONDS);
	
  }
  
  //navigate to the URL
  public void navigate(String URL){
	  driver.get(config.getProperty(URL));
  }

  public void type(String object,String text){
	driver.findElement(By.xpath(OR.getProperty(object))).sendKeys(text);
  }
  
  
  public void click(String object){
	 driver.findElement(By.xpath(OR.getProperty(object))).click();
  }
  
  public void select(String object,String text){
	  driver.findElement(By.xpath(OR.getProperty(object))).sendKeys(text);
  }
  
  
  public boolean isElementPresent(String object){
	  int count=driver.findElements(By.xpath(OR.getProperty(object))).size();
	  if(count==0)
		  return false;
	  else
		  return true;
			  
	  }
  
  public boolean verifyText(String Object, String expectedText){
	  String actualText=driver.findElement(By.xpath(OR.getProperty(Object))).getText();
	  if(actualText.equals(expectedText))
		  return true;
	  else
		  return false;
	  
  }
  
  
  
  
  
  
  
  
  
  
  
 //*********************************************************************************Application dependent functions*******************************************************
  
  public boolean isLoggedin() {
		// TODO Auto-generated method stub
	  if(isElementPresent("createPageLink"))
		return true;
	  else
		return false;  
	}
	 
  public void doDefaultLogin() {
		// TODO Auto-generated method stub
	  navigate("LoginURL");
	  type("loginUsername",config.getProperty("defaultLoginUsername"));
	  type("loginPassword",config.getProperty("defaultLoginPassword"));
	  click("loginButton");
		
	}
  
  
  
  
  
 /*******************************************singleton**************************************************************************/
  public static WebConnector getInstance(){
	  if (web==null)
		  web=new WebConnector();
	  
	  return web;
  }








  
  }
  







