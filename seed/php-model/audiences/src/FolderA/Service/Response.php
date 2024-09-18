<?php

namespace Seed\FolderA\Service;

use Seed\Core\SerializableType;
use Seed\Core\JsonProperty;
use Seed\FolderB\Common\Foo;

class Response extends SerializableType
{
    #[JsonProperty("foo")]
    /**
     * @var ?Foo $foo
     */
    public ?Foo $foo;

    /**
     * @param ?Foo $foo
     */
    public function __construct(
        ?Foo $foo = null,
    ) {
        $this->foo = $foo;
    }
}
