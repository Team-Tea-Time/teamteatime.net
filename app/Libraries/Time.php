<?php namespace App\Libraries;

use Carbon\Carbon;

class Time
{

    public static function convertUnixTimestamp( $timestamp, $options = array() )
    {
        $options += array(
            'human_diff'    => FALSE,
            'format'        => 'Y-m-d H:i:s'
        );

        $timestamp = ( $options['human_diff'] ) ? self::convertTimestampToHumanDiff( $timestamp ) : date( $options['format'], $timestamp );

        return $timestamp;
    }

    public static function convertTimestampToHumanDiff( $timestamp )
    {
        $timestamp = ( !is_numeric( $timestamp ) ) ? strtotime( $timestamp ) : $timestamp;

        return Carbon::createFromTimeStamp( $timestamp )->diffForHumans();
    }

}
