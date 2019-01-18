package com.wya.example.control;

import android.content.BroadcastReceiver;
import android.content.Context;
import android.content.Intent;
import android.os.BatteryManager;

import com.wya.example.util.log.DebugLogger;

/**
 * @author :
 */
public class BatteryLevelReceiver extends BroadcastReceiver {
	@Override
	public void onReceive(Context context, Intent intent) {
		StringBuilder sb = new StringBuilder();
		int rawLevel = intent.getIntExtra("level", -1);
		int scale = intent.getIntExtra("scale", -1);
		int status = intent.getIntExtra("status", -1);
		int health = intent.getIntExtra("health", -1);
		int level = -1;
		if (rawLevel >= 0 && scale > 0) {
			level = (rawLevel * 100) / scale;
		}
		sb.append("The phone ");
		DebugLogger.logBattery("onReceive");
		
		if (BatteryManager.BATTERY_HEALTH_OVERHEAT == health) {
			sb.append("s battery feels very hot!");
		} else {
			switch (status) {
				case BatteryManager.BATTERY_STATUS_UNKNOWN:
					DebugLogger.logBattery("no battery.");
					sb.append("no battery.");
					break;
				case BatteryManager.BATTERY_STATUS_CHARGING:
					sb.append("s battery");
					if (level <= 33) {
						DebugLogger.logBattery("is charging, battery level is low" + "[" + level + "]");
						sb.append("is charging, battery level is low" + "[" + level + "]");
					} else if (level <= 84) {
						DebugLogger.logBattery("is charging, battery level is low" + "[" + level + "]");
						
						sb.append("is charging." + "[" + level + "]");
					} else {
						DebugLogger.logBattery("will be fully charged.");
						
						sb.append("will be fully charged.");
					}
					break;
				case BatteryManager.BATTERY_STATUS_DISCHARGING:
				case BatteryManager.BATTERY_STATUS_NOT_CHARGING:
					if (level == 0) {
						DebugLogger.logBattery("needs charging right away.");
						
						sb.append("needs charging right away.");
					} else if (level > 0 && level <= 33) {
						DebugLogger.logBattery("is about ready to be recharged, battery level is low" + "[" + level + "]");
						
						sb.append("is about ready to be recharged, battery level is low"
							+ "[" + level + "]");
					} else {
						DebugLogger.logBattery("s battery level is" + "[" + level + "]");
						sb.append("s battery level is" + "[" + level + "]");
					}
					break;
				case BatteryManager.BATTERY_STATUS_FULL:
					DebugLogger.logBattery("is fully charged.");
					
					sb.append("is fully charged.");
					break;
				default:
					DebugLogger.logBattery("s battery is indescribable!");
					sb.append("s battery is indescribable!");
					break;
			}
		}
		sb.append("");
	}
}
