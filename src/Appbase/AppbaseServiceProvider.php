<?php
/**
 * AppbaseServiceProvider.php
 * Created by anonymous on 08/12/15 16:58.
 */

namespace Componeint\Appbase;

use ReflectionClass;
use Illuminate\Foundation\AliasLoader;
use Illuminate\Support\ServiceProvider;

class AppbaseServiceProvider extends ServiceProvider
{

    /**
     * Indicates if loading of the provider is deferred.
     *
     * @var bool
     */
    protected $defer = false;

    /**
     * Bootstrap the application events.
     *
     * @return void
     */
    public function boot()
    {
        // Find path to the package
        $componenentsFileName = with(new ReflectionClass('\Componeint\Appbase\AppbaseServiceProvider'))->getFileName();
        $componenentsPath = dirname($componenentsFileName);

        $this->loadViewsFrom($componenentsPath . '/../views', 'appbase');

        // include $componenentsPath . '/../routes.php';
    }

    /**
     * Register the service provider.
     *
     * @return void
     */
    public function register()
    {
        $this->app->register(\Componeint\Dashboard\DashboardServiceProvider::class);
        $this->app->register(\Componeint\Seneschal\SeneschalServiceProvider::class);
    }

    /**
     * Get the services provided by the provider.
     *
     * @return array
     */
    public function provides()
    {
        return [];
    }

}
