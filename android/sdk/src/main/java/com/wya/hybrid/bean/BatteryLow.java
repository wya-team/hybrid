package com.wya.hybrid.bean;

/**
 * @date: 2019/1/17 15:53
 * @author: Chunjiang Mao
 * @classname: BatteryLow
 * @describe:
 */
public class BatteryLow {
    
    public static final String EVENT_BATTER_LOW = "batteryLow";
    
    private int level;
    
    private boolean isPlugged;
    
    public int getLevel() {
        return level;
    }
    
    public void setLevel(int level) {
        this.level = level;
    }
    
    public boolean isPlugged() {
        return isPlugged;
    }
    
    public void setIsPlugged(boolean plugged) {
        isPlugged = plugged;
    }
    
    @Override
    public String toString() {
        return "BatteryLow{" +
                "level=" + level +
                ", isPlugged=" + isPlugged +
                '}';
    }
    
}