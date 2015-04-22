<?php namespace App\Libraries;

class Utils
{

    public static function searchArray( $haystack, $needle )
    {
        $results = array();

        foreach ( $haystack as $str )
        {
            if ( stripos( $str, $needle ) !== false ) {
                $results[] = $str;
            }
        }

        return $results;
    }

    public static function generateToken()
    {
        return md5( uniqid( mt_rand(), TRUE ) );
    }

    public static function urlEncode( $string )
    {
        return urlencode( strtolower( str_replace( [ ' ', "'" ], [ '-', '' ], $string ) ) );
    }

}
