<?php

namespace Seed\Types;

use Seed\Core\SerializableType;
use Seed\Core\JsonProperty;

class Request extends SerializableType
{
    #[JsonProperty("request")]
    /**
     * @var mixed $request
     */
    public mixed $request;

    /**
     * @param mixed $request
     */
    public function __construct(
        mixed $request,
    ) {
        $this->request = $request;
    }
}
